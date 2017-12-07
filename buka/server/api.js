// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const Models = require('./db');
const express = require('express');
const router = express.Router();

/************** 用户 **************/


// 注册
// http://localhost:8080/ap/regist/createAccount
router.post('/ap/regist/createAccount', (req, res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  Models.UserModel.find({ username: req.body.username }, (err, docs) => {
    var result = {
      code: 1
    }
    if (err || docs.length > 0) {
      result.code = -109;
      result.message = "用户名已经存在！";
      res.send(JSON.stringify(result));
      return;
    }


    let user = new Models.UserModel();
    user.username = req.body.username;
    user.psw = req.body.psw;


    user.save((err) => {
      if (err) {
        result.code = -108;
        result.message = "注册失败！";
      }
      res.send(JSON.stringify(result));
    })
  })
});

// 登陆
router.post('/ap/login/getAccount', function(req, res, next) {
  var that = this;
  Models.UserModel.find({ username: req.body.username, psw: req.body.psw }, (err, docs) => {
    var result = {
      code: 1
    }
    if (err || docs.length == 0) {
      result.code = -110;
      result.message = "登录失败";
    } else {
      // console.log(req);
      req.session.username = req.body.username;
      // console.log(req.session)
    }

    res.send(JSON.stringify(result));

  })
});

router.get('/ap/session', (req, res) => {

  if (!req.session) {
    res.send("err");
  } else {
    res.send(req.session.username);
  }

  // console.log(req.session.username);
});


router.get('/ap/logout', function(req, res) {
  req.session.username = null;
  res.send("注销成功");
});

router.get('/ap/find', (req, res) => {
  // 通过模型去查找数据库
  Models.UserModel.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

/************** 收藏 **************/
router.get('/ap/collect/find', (req, res) => {
  // 通过模型去查找数据库
  Models.CollectModel.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


router.get('/ap/collect/getData', function(req, res, next) {
  //TODO:加完session
  if (!req.session.username) {
    var logDefeat = "请您先登录！再查看收藏";

    res.send(JSON.stringify(logDefeat));
    return;
  };
  Models.CollectModel.find({ flag: 1, username: req.session.username }, (err, docs) => {
    // Models.CollectModel.find({ flag: 1 }, (err, docs) => {
    // console.log(docs);
    // console.log(err);
    if (err || docs.length == 0) {
      res.send(err);
    } else {
      res.send(docs);
    }
  })

});
//增

router.post('/ap/collect/create', function(req, res, next) {
  Models.CollectModel.find({ cartoonname: req.body.cartoonname ,flag:1}, (err, docs) => {
    var result = {
      code: 1
    }
    if (err || docs.length > 0) {
      result.code = -109;
      result.message = "收藏已经存在！";
      // result.text = "已收藏";
      res.send(JSON.stringify(result));
      return;
    }
    var collectN = new Models.CollectModel();
    collectN.username = req.session.username;
    collectN.cartoonname = req.body.cartoonname;
    collectN.imgurl = req.body.imgurl;
    collectN.save((err) => {
      if (err) {
        res.send("漫画收藏失败");
      } else {
        res.send("漫画收藏成功");
      }
    });

  })



});
//删
router.post('/ap/collect/del', function(req, res, next) {
  Models.CollectModel.update({ _id: req.body.id }, { flag: 0 }, (err) => {
    var result = {
      code: 1
    }
    if (err) {
      console.log(err);
      result.code = -88;
      result.message = "删除失败";
    }
    res.send(JSON.stringify(result));
  })

});



module.exports = router;

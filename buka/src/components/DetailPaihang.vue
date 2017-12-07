<template>
  <div class="detailp">
    <div v-if="Data" class="all">
      <div class="first">
        <div class="head">
          <router-link to="/">
            <img src="../assets/hui.png">
          </router-link>
          <p class="title">{{Data.name}}</p>
        </div>
        <img :src="Data.logos" class="imgurl" />
      </div>
    </div>
    <div class="btn">
      <span id="down" @click="warnLogin()" v-if="this.collects == '请您先登录！再查看收藏'">点击收藏</span>
      <span id="down" @click="collect()" v-else>点击收藏</span>
      <router-link to="/regist">
        <span>注册</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailp",
  data: function() {
    return {
      Data: null,
      key: {},
      text: {
        no: "点击收藏",
        yes: "已收藏"
      },
      username: "",
      collects: ''
    }
  },
  methods: {
    getDate: function() {
      var that = this;
      // http://m.buka.cn/api/v3/home?page=1
      // 
      this.$http.get("/ranking/get_data")
        .then(function(res) {
          console.log(res);
          var index = that.$route.query.index;
          var id = that.$route.params.lid;
          var arr = res.data.datas.items;
          console.log(arr[index]);
          that.Data = arr[index]
          // console.log(that.Data)

        })
    },
    getSession: function() {
      var that = this;
      // http://m.buka.cn/api/v3/home?page=1
      // 
      this.$http.get("/ap/session")
        .then(function(res) {
          // console.log(res);
          that.username = res.data;

        })
    },
    getCollect: function() {
      var that = this;
      // http://m.buka.cn/api/v3/home?page=1
      // 
      this.$http.get("/ap/collect/getData")
        .then(function(res) {
          // console.log(res);

          that.collects = res.data;

        })
    },
    warnLogin: function() {
      alert("请您先登录！")
    },
    collect: function() {
      var that = this;
      var cartoonname = document.querySelector(".title").innerHTML;
      var imgurl = $(".imgurl")[0].src;
      // console.log(imgurl);
      this.$http.post("/ap/collect/create", {
          cartoonname: cartoonname,
          imgurl: imgurl
        })
        .then(function(res) {
          // console.log(res);
          // $("#down").html("已收藏");
          alert("收藏成功");

        })
    }
  },
  created: function() {

  },
  mounted: function() {
    this.getDate();
    this.getSession();
    this.getCollect();
    console.log(this.collects)


  }
}

</script>
<style scoped>
.detailp {
  width: 100%;
  height: auto;
  margin-top: 89px;
  /*z-index: 999;*/
  position: relative;
}

.detailp .btn {
  width: 100%;

  height: 1.3rem;

  margin-top: 270px;
  text-align: center;
}

.detailp .btn span {
  display: inline-block;
  width: 40%;
  text-align: center;
  margin: 0 10px;
  border: 1px solid #ccc;
  height: 30px;
  line-height: 30px;
  background-image: linear-gradient(to top, #fea025, #fe960e);
}

.head {
  background: #fff;
  width: 100%;
  height: 34px;
}
a{
  color: inherit;
}
.head a {
  display: block;
  float: left;
  width: 20%;
  height: 34px;
  line-height: 34px;
  padding-left: 10px;
}

.head img {
  width: 18px;
  height: 18px;
  display: inline-block;
}

.head p {
  width: 50%;
  height: 34px;
  line-height: 34px;
  text-align: center;
  margin: 0 auto;
}

.all {
  width: 100%;
  height: 100px;
}

.first {

  height: auto;
}

.first>img {

  width: 50%;
  margin: 0 auto;
  display: block;
  height: auto;
}

</style>

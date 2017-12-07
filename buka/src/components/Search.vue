<template>
  <div class="search">
    <div class="head">
      <router-link to="/">
        <i style="font-style: normal;"><</i>
      </router-link>
      <form class="form" enctype="multipart/form-data">
        <input type="text" class="cont" v-model="searchCont" placeholder="漫画 | 作者 | 资讯 | 漫展">
      </form>
      <ul class="listSearch">
        <li v-if="list" v-for="item in list">{{item}}</li>
      </ul>
      <!-- <p>{{searchCont}}</p> -->
      <span></span>
      <button class="btn" @click="searchOn()">搜索</button>
    </div>
    <div class="searchList">
      <ul v-if="searchTxt">
        <li v-for="key in searchTxt">
          <img :src="key.logos">
          <p>{{key.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'search',
  data() {
    return {
      searchCont: "",
      list: null,
      searchTxt: null
    }
  },
  methods: {
    searchOK: function() {
      var that = this;
      document.querySelector(".cont").onkeyup = function() {
        //search: 运用Form Data 传值
        // https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects
        // http://m.buka.cn/search/ajax_tips_v2
        var formElement = document.querySelector(".form");
        var formData = new FormData(formElement);
        formData.append("key", that.searchCont);
        that.$http.post("/search/ajax_tips_v2", formData)
          .then(function(res) {
            console.log(res);
            that.list = res.data.datas;
          })

      }
    },
    searchOn: function() {

      var lis = document.querySelectorAll(".listSearch li");
      var len =lis.length;
      for(var i = 0 ;i<len;i++){
        lis[i].innerHTML = "";
        lis[i].style.height = 0;
      }
      // console.log("ok");
      // http://m.buka.cn/search/ajax_search
      var that = this;

      //search: 运用Form Data 传值
      // https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects
      // http://m.buka.cn/search/ajax_tips_v2
      var formElement = document.querySelector(".form");
      var formData = new FormData(formElement);
      formData.append("key", that.searchCont);
      formData.append("start", 0);
      formData.append("count", 15);
      that.$http.post("/search/ajax_search", formData)
        .then(function(res) {
          // console.log(res);
          that.searchTxt = res.data.datas.items;
          console.log(that.searchTxt)

        })


    }
  },
  mounted: function() {
    this.searchOK();
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listSearch {
  list-style: none;
  position: absolute;
  top: 48px;
  left: 40px;
  width: 255px;
}

.listSearch li {
  width: 255px;
  height: 40px;
  /*background: red;*/
  float: left;
  line-height: 40px;
  padding: 0 3% 0 12%;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, .3);
  color: #999;
}

.search {
  position: relative;

  width: 100%;
  min-height: 200px;
  opacity: 1;
  background: #fff;
  z-index: 666;

}

.search .head {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 2%;
  border-bottom: 1px solid #f1f1f1;
  position: fixed;
  z-index: 888;
  top: 0;
  left: 0;
  box-sizing: border-box;
}

.search .head span {
  width: 26px;
  height: 26px;
  display: block;
  position: absolute;
  top: 13px;
  left: 12%;
  background: url(../assets/search.png) no-repeat 0 0;
  background-size: 26px 26px;
}

.search .head a {
  color: #999;
  font-size: 25px;
  width: 9%;
  float: left;
  text-decoration: none;
}

.search .head .cont {
  position: relative;
  background: #e4e5e7;
  height: 40px;
  width: 71%;
  float: left;
  border-radius: 3px;
  outline: none;
  padding-left: 35px;
  box-sizing: border-box;
}

.search .head .btn {

  font-size: 15px;
  background: #fe960e;
  color: #fff;
  width: 18%;
  float: right;
  text-align: center;
  border-radius: 3px;
  height: 40px;
  line-height: 40px;
  outline: none;
  border: 0;
}

.searchList {
  padding: 2% 0;
  overflow: hidden;
  width: 100%;
  padding-top: 65px;
}
ul{
  list-style: none;
}
.searchList li {
  width: 30.6%;
  float: left;
  margin: 0 0 3% 2%;
}

.searchList li img {
  width: 100%;
  display: block;
}

.searchList li p {
  margin-top: 5px;
  width: 100%;
  height: 32px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

</style>

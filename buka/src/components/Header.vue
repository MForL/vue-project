<template>
  <div class="head">
    <router-link to="/collect">
      <i class="iconfont collect" v-if="username" style="color: #f19601">&#xe6b0;</i>
      <i class="iconfont collect" v-else>&#xe6b0;</i>
    </router-link>
    <div class="first">
      <img src="../assets/logo.png">
      <router-link to="/search">
        <div class="search"></div>
      </router-link>
      <div class="other_session" v-if="username">
        <i class="iconfont" @click="flag = !flag">&#xe621;</i><span>{{username}}</span>
        <ul id="list" v-if="flag">
          <li>
            <router-link to="/collect">
              收藏
            </router-link>
          </li>
          <li @click="logOut">注销</li>
        </ul>
      </div>
      <div class="other" v-else>
        <router-link to="/login">
          <i class="iconfont">&#xe621;</i>登陆
        </router-link>
        <router-link to="/regist">
          <i class="iconfont">&#xe894;</i>注册
        </router-link>
      </div>
    </div>
    <div class="second">
      <ul>
        <li class="focus">
          <router-link to="/tuijian" active-class="color">
            推荐
          </router-link>
        </li>
        <li class="focus">
          <router-link to="/paihang" active-class="color">
            排行
          </router-link>
        </li>
        <li class="focus">
          <router-link to="/fenlei" active-class="color">
            分类
          </router-link>
        </li>
      </ul>
    </div>
    <button id="button" @click="runTop">顶</button>
  </div>
</template>
<script>
export default {
  name: 'head-comp',
  data() {
    return {
      username: "",
      flag: false
    }
  },

  methods: {
    getSession: function() {
      var that = this;
      this.$http.get("/ap/session")
        .then((res) => {
          if (res) {
            that.username = res.data;
          } else {
            that.username = "";
          }

        })
    },
    logOut: function() {
      if(!confirm("确定退出登录？")){
        return;
      }
      var that = this;
      this.$http.get("/ap/logout")
        .then((res) => {
          location.reload(true);

        })
    },
    toTop: function() {
      window.onscroll = function() {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var btn = document.querySelector("#button");
        if (scrollTop >= 500) {
          btn.style.display = 'block';
        } else {
          btn.style.display = 'none';
        }

        // console.log(scrollTop);
      }
    },
    runTop: function() {
      var speed = 10;
      var time = setInterval(function() {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var now = scrollTop;
        speed = (0 - now) / 10;
        speed = Math.floor(speed);
        if (now === 0) {
          clearInterval(time);
        }
        document.body.scrollTop = document.documentElement.scrollTop = now + speed;

      }, 20);
    }

  },
  created: function() {
    this.getSession();
  },
  mounted: function() {
    this.toTop();
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#button {
  position: fixed;
  font-size: 20px;
  bottom: 50px;
  width: 40px;
  height: 40px;
  right: 15px;
  text-align: center;
  line-height: 20px;
  z-index: 999;
  color: #fff;
  border-radius: 50%;
  background: #fe960e;
  padding: 5px;
  opacity: .8;
  display: none;
}

#list {
  position: absolute;
  top: 32px;
  right: 10px;
  width: 44%;
  height: auto;
  background: #fff;
}

.color {
  color: #f19601;
}

#list li {
  height: 20px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  box-shadow: 1px 1px 0px #ccc;
  text-align: center;
}

.head {
  width: 100%;
  height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 666;
  background: #fff;
}

.head .first {
  width: 100%;
  height: 44px;
}

.collect {
  position: fixed;
  right: 10px;
  bottom: 10px;
  font-size: 32px;
}

.head .first img {
  width: 80px;
  height: 35px;
  float: left;
  margin-left: 1rem;
}

.head .first .search {
  float: left;
  width: 40%;
  height: 44px;
  margin-left: 1rem;
  background: url(../assets/search.png) no-repeat left 7px;
  background-size: 26px 26px;
}

.head .first .other {
  float: left;
  width: 28%;
  height: 44px;
  line-height: 44px;
}

.head .first .other a {
  color: #f19601 !important;
}

.head .first .other_session {
  float: right;
  width: 28%;
  height: 44px;
  line-height: 44px;
  text-align: right;
  padding-right: 10px;
  box-sizing: border-box;
  position: relative;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333333;
}








/*.head{
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  height: 38px;
}*/

.head .second {
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #ccc;
  background: #fff;
}

.head .second ul li {
  float: left;
  width: 33%;
  height: 38px;
  line-height: 38px;
  text-align: center;
}

.focus {
  color: #f19601;
}

.other_session{
  color: #f19601;
  font-size: 20px;
}
.other_session i{
  font-size: 20px;
}
.other_session a{
  color: #f19601 !important;
}
</style>

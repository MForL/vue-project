<template>
  <div class="login">
    <p>请登陆</p>
    <dl>
      <dt>用户名</dt>
      <dd>
        <input type="text" id="username" autofocus="autofocus" v-model="username">
      </dd>
    </dl>
    <dl>
      <dt>密码</dt>
      <dd>
        <input type="text" id="psw" v-model="psw">
      </dd>
    </dl>
    <dl>
      <dt></dt>
      <dd>
        <button type="submit" @click="login" id="log">登录</button>
      </dd>
    </dl>
    
    
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      psw: ''
    }
  },
  methods: {
    login() {
      // 获取已有账号密码
      var that = this;
      this.$http.post('/ap/login/getAccount', {
          username: this.username,
          psw: this.psw
        })
        .then((response) => {
          // 响应成功回调
          console.log(response);
          
          if (response.data.code != 1) {
            alert(response.data.message);
            return;
          }
          // that.$emit('statusUser',that.username);
          console.log(that);
          location.href = '/'
        })
        .catch((reject) => {
          console.log(reject)
        });
    }
  }
}

</script>
<style scoped>
.login {
  padding: 2%;
  margin-top: 89px;
  height: auto;
  overflow: hidden;
}
#log{
  width: 40px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  outline:none;
  background: #f19601;
  border: 0;
  margin-left: 10px;
}
.login p{
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 1.5rem;
}
.login dl {
  width: 100%;
  height: 60px;
  margin-top: 8px;
}

.login dl dt {
  width: 30%;
  height: 60px;
  text-align: right;
  line-height: 60px;
  float: left;
}

.login dl dd {
  width: 65%;
  height: 60px;

  float: right;
}

.login dl dd input {
  height: 21px;
  float: left;
  margin-top: 19px;
  margin-left: 10px;
}

</style>

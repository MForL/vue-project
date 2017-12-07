<template>
  <div class="regist">
    <p>请注册</p>
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
        <button type="submit" @click="regist" id="reg">注册</button>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'regist',
  data() {
    return {
      username: '',
      psw: ''
    }
  },
  methods: {
    regist() {
      // 获取已有账号密码
      var that = this;
      this.$http.post('/ap/regist/createAccount', {
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
           location.href = 'http://localhost:8080/#/login';
          // that.$router.push({path:"/login"});

        })
        .then((response) => {
          console.log(response)
        })
        .catch((reject) => {
          console.log(reject)
        });
    }
  }
}

</script>
<style scoped>
.regist {
  padding: 2%;
  margin-top: 89px;
  height: auto;
  overflow: hidden;
}

#reg {
  width: 40px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  outline: none;
  background: #f19601;
  border: 0;
  margin-left: 10px;
}

.regist p {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 1.5rem;
}

.regist dl {
  width: 100%;
  height: 60px;
  margin-top: 8px;
}

.regist dl dt {
  width: 30%;
  height: 60px;
  text-align: right;
  line-height: 60px;
  float: left;
}

.regist dl dd {
  width: 65%;
  height: 60px;

  float: right;
}

.regist dl dd input {
  height: 21px;
  float: left;
  margin-top: 19px;
  margin-left: 10px;
}

</style>

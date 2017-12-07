<template>
  <div class="bottom">
    <div class="bottom_log"></div>
    <button class="btn">安装客户端</button>
    <p>
      Copyright©buka.cn
    </p>
  </div>
</template>
<script>
export default {
  name: 'bottom',
  data() {
    return {

    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom {
  width: 100%;
  height: auto;
  text-align: center;
}

.bottom .bottom_log {
  margin: 0 auto;
  width: 145px;
  height: 30px;
  background: url(../assets/manhua.png) no-repeat;
  background-size: 145px 30px;
}

.bottom .btn {
  display: inline-block;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 15px;
  color: #fff;
  background: #fe960e;
}

.bottom p {
  color: #999;
  font-size: 13px;
  margin: 10px 0;
}

</style>

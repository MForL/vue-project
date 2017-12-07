<template>
  <div class="home">
    <tuijian></tuijian>
    <bottom></bottom>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
a{
    text-decoration: none;
    color: #333333;
}
.head{
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  height: 38px;
}
.head .second {
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #ccc;
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
</style>

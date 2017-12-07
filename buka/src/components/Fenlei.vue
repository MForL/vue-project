<template>
  <div class="fenlei">
    <ul>
      <li v-for="item in Data">
        <img :src="item.imgurl">
        <p>{{item.title}}</p>
      </li>
    </ul>

    
  </div>
</template>
<script>
export default {
  name: 'fenlei',
  data() {
    return {
      Data: [{
          "imgurl": "http://i-r6.sosobook.cn/logo/group/20160825145944_57be976063e36.png",
          "title": "最近更新"
        },
        {
          "imgurl": "http://i-r6.sosobook.cn/logo/group/20160825145948_57be9764d0c6e.png",
          "title": "今日热榜"
        },
        {
          "imgurl": "http://i-r6.sosobook.cn/logo/group/20161013164354_57ff494a432b3.png",
          "title": "高分精选"
        },
        {
          "imgurl": "http://i-r6.sosobook.cn/logo/group/20161012160943_57fdefc702307.png",
          "title": "漫展周边"
        }
      ]
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fenlei {
  padding: 2rem 1rem 0;
  margin-top: 78px;
  overflow: hidden;
}

ul {
  list-style: none;
}

ul li {
  text-align: center;
  margin-bottom: 1.3rem;
  float: left;
  width: 30%;
  height: 9rem;
  padding:2% 3%;
  box-sizing: border-box;
}

ul li img {
  width: 100%;
  height: auto;
  margin-bottom: 10%;
}

ul li:nth-of-type(2) {
  text-align: center;
  margin: 0 5%;
  float: left;
  width: 30%;
  height: 9rem;
}

</style>

<template>
  <div class="hello" v-if="Data">
    <div class="lun">
      <mt-swipe :auto="4000" :show-indicators="false">
        <mt-swipe-item v-for="(item,index) in Data[0].items">
          <img :src="item.pic_url">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="first" v-for="(ite,index) in Data" v-if="index>=1">
      <span></span>
      <p>{{Data[index].title}}</p>
      <ul>
        <li v-for="item in Data[index].items">
          <router-link :to="{name:'Detail', params:{lid: item.id},query:{index:index}}">
            <img :src="item.pic_url">
            <p>{{item.title}}</p>
            <span>{{item.subtitle}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="first" v-for="(ite,index) in NewData">
      <span></span>
      <p>{{NewData[index].title}}</p>
      <ul>
        <li v-for="item in NewData[index].items">
          <router-link :to="{name:'Detail', params:{lid: item.id},query:{index:index}}">
            <img :src="item.pic_url">
            <p>{{item.title}}</p>
            <span>{{item.subtitle}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tuijian',
  data() {
    return {
      Data: null,
      NewData: null
    }
  },
  methods: {
    getDate: function() {
      var that = this;
      // http://m.buka.cn/api/v3/home?page=1
      // http://m.buka.cn/api/v3/home?page=2
      this.$http.get("/api/v3/home?page=1")
        .then(function(res) {
          console.log(res);
          that.Data = res.data.datas.items;
          console.log(that.Data);
        })
      this.$http.get("/api/v3/home?page=2")
        .then(function(res) {
          console.log(res);
          that.NewData = res.data.datas.items;
          console.log(that.NewData);
        })
    }
  },
  mounted: function() {
    this.getDate();

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.hello {
  padding: 2%;
  margin-top: 89px;
  height: auto;
  overflow: hidden;
}

.hello .lun img {
  width: 360px;
  height: auto;
}

.hello .lun {
  width: 100%;
  height: 240px;
  margin-bottom: 18px;
}

.first:nth-of-type(1) {
  display: none !important;
}

.first {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 18px;
  position: relative;
}

.first>span {
  position: absolute;
  display: inline-block;
  border-radius: 3px;
  margin-top: 1px;
  width: 3px;
  height: 15px;
  background: #fe960e;
}

.hello div:nth-of-type(2) ul li:last-of-type {
  width: 360px;
  height: auto;
}

.hello div:nth-last-of-type(2) ul li {
  width: 32%;
  display: inline-block;
  margin-top: 12px;
  position: relative;
  margin-right: 1%;
}

.hello div:nth-last-of-type(2) ul li:last-of-tyoe {
  margin-right: 0;
}

.hello div:nth-last-of-type(3) ul li {
  width: 32%;
  display: inline-block;
  margin-top: 12px;
  position: relative;
  margin-right: 1%;
}

.hello div:nth-last-of-type(3) ul li:last-of-tyoe {
  margin-right: 0;
}

.first>p {
  margin: 0;
  font-size: 15px;
  height: 17px;
  line-height: 17px;
  text-indent: 1rem;
}

.first ul {
  list-style: none;
  height: auto;
  overflow: hidden;
}

.first ul li {
  float: left;
  width: 49%;
  height: 162px;
}

.first ul li p {
  font-size: 14px;
  color: #333;

  max-height: 38px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.first>ul>li span {
  font-size: 12px;
  color: #999;
  margin: 0;
  text-align: left;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space: nowrap;
}

.first ul li:nth-of-type(odd) {
  margin-right: 1%;
  margin-top: 12px;
  width: 49%;
}

.first ul li:nth-of-type(even) {
  margin-left: 1%;
  margin-top: 12px;
  width: 49%;
}



/*.first:nth-of-type(2) ul li:last-of-type {
  width: 360px;

}*/

.first ul li img {
  width: 100%;
}

</style>

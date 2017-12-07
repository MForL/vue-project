<template>
  <div class="hello">
    <ul v-if="Data">
      <li v-for="(item,index) in Data">
        <router-link :to="{name:'Detailp', params:{lid: item.mid},query:{index:index}}">
          <img :src="item.logo">
          <p>
            <span>{{index+1}}.</span>{{item.name}}
          </p>
          <span>{{item.author}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'paihang',
  data() {
    return {
      Data: null
    }
  },
  methods: {
    getDate: function() {
      var that = this;
      // http://m.buka.cn/ranking/get_data
      this.$http.get("/ranking/get_data")
        .then(function(res) {
          // console.log(res.data.datas.items);
          that.Data = res.data.datas.items;
          console.log(that.Data);

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
.hello {
  padding-top: 17.375px;
  margin-top: 78px;
  overflow: hidden;
  text-align: center;
  color: #B5B5B5;
}
a{
  text-decoration: none;
  color: inherit;
  font-size: inherit;
}
.hello ul li {
  float: left;
  text-align: left;
  width: 29%;
  margin-left: 3.3%;
  margin-bottom: 3.3%;
}

.hello ul li a img {
  width: 100%;
  height: auto;
  height: 163px;
}

.hello ul li a p {
  width: 100%;
  max-height: 38px;
  height: 1.5rem;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.hello ul li a>span {
  color: #999;
  width: 100%;
  display: block;
  font-size: .9rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>

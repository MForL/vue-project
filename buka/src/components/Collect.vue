<template>
  <div class="collect">
    <p>收藏夹</p>
    <i v-if="message">{{message}}</i>
    <table v-if='data'>
      <tbody>
        <tr>
          <td>序号</td>
          <td>漫画</td>
          <td>名字</td>
          <td>操作</td>
        </tr>
        <tr v-if="data" v-for="(item,index) in data">
          <td>{{index+1}}</td>
          <td>
            <img :src="item.imgurl">
          </td>
          <td>{{item.cartoonname}}</td>
          <td>
            <button @click="delOne(item._id)" class="btn">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'collect',
  data() {
    return {
      data: null,
      message:null
    }
  },
  methods: {
    getData: function() {
      var that = this;
      this.$http.get('/ap/collect/getData')
        .then((response) => {
          // 响应成功回调
          console.log(response);
          if (response.data == "请您先登录！再查看收藏") {
              that.data = null;
              that.message = "请您先登录！再查看收藏";
          }else{
            that.message = null
            that.data = response.data;
          }
          
        })
        .catch((reject) => {
          console.log(reject)
        });
    },
    delOne:function(cartoonId) {
    if (!confirm("你是否真的要删除？")) {
        return;
    }
    var that = this;
    this.$http.post('/ap/collect/del',{id:cartoonId})
        .then((res) => {
          // 响应成功回调
          console.log(res);
            if (res.data.code != 1) {
                alert(res.data.message);
                return;
            }
            location.reload(true);
        })
        .catch((reject) => {
          console.log(reject)
        });
}
  },
  mounted: function() {
    this.getData();
  }
}

</script>
<style scoped>
.collect {
  padding: 2%;
  margin-top: 89px;
  height: auto;
  overflow: hidden;
}
.collect i{
  display: block;
  width: 100%;
  height: 38px;
  line-height: 38px;
  text-align: center;
  margin-top: 40px;
  color: red;
}
.btn{
  /*background: red;*/
  outline: none;
  border: 0;
  width: 50%;
  height: 50%;
}
.collect p{
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 1.5rem;
}
table{
  width: 100%;
  height: auto;
  
}
table tbody{
  width: 100%;
  height: auto;
}
tr{
  height: 30px;
  width: 100%;
}
td{
  width: 25%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
}
td img{
  width: 100%;
}
</style>

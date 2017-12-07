// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Home from './components/Home'
import Header from './components/Header'
import Tuijian from './components/Tuijian'
import Bottom from './components/Bottom'
// import Login from './components/Login'
// import Regist from './components/Regist'
import MintUI from 'mint-ui'
import {Swipe, SwipeItem} from 'mint-ui';

import { Lazyload } from 'mint-ui';
import Axios from 'Axios'
Vue.prototype.$http = Axios;


Vue.use(MintUI)
Vue.use(Lazyload);



Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tuijian.name, Tuijian);
Vue.component(Bottom.name, Bottom);
// Vue.component(Login.name, Login);
// Vue.component(Regist.name, Regist);


Vue.config.productionTip = false
Vue.component(Home.name,Home);
Vue.component(Header.name,Header);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

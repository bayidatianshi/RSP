import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './common/css/global.scss'
import './common/css/iconfont.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');

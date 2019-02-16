import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入 iconfont样式
import "styles/iconfont.css";
import "styles/reset.css";
//移动端  1像素边框问题
import "styles/border.css";
//移动端300毫秒延迟
import fastClick from "fastclick";
fastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

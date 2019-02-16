import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick"
import "./assets/reset.css";
//移动端  1像素边框问题
import "./assets/border.css";
//移动端300毫秒延迟

Vue.config.productionTip = false;
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

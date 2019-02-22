import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/home";

import City from "./views/city/city";
import Detail from "./views/detail/detail";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/city",
      name: "City",
      component: City,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail,
      meta:{
        keepAlive:false 
      }
    }
  ]
});

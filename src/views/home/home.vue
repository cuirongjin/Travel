<template>
  <div class="hone">
    <home-header/>
    <home-swiper :list="swiperList"/>
    <home-icons  :list="iconList"/>
    <home-recommend :list="recommendList"/>
    <home-weekend :list="weekendList"/>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import  axios  from  "axios"
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return{
      
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods:{
    getHomeInfo() {
      axios.get("/api/index.json")
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      console.log(res);
      res=res.data;
      if(res.ret){
        const  data=res.data;
        console.log(data)
        this.swiperList=data.swiperList;
        this.iconList=data.iconList;
        this.recommendList=data.recommendList;
        this.weekendList=data.weekendList;
      }
      
    }
  }

};
</script>
<style scoped></style>

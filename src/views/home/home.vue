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
import {mapState} from  "vuex"
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
      lastCity:"",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  mounted () {
    this.lastCity=this.city
    this.getHomeInfo()
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo() {
      axios.get("/api/index.json?city"+this.city)
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
  },
  //页面从新显示
  activated(){
    if(this.lastCity!=this.city){
      this.lastCity=this.city
      this.getHomeInfo()
    }
  }
};
</script>
<style scoped></style>

<template>
  <div>
    <div class="search">
     <input type="text" placeholder="训责城市和地区" v-model="keyWord">
    </div>
    <div
       class="search-content"
       ref="search" 
       v-show="keyWord"
        >
      <ul> 
        <li 
          class="search-item border-bottom" 
          v-for="item in list" 
          :key="item.id"
          @click="handleCityClick(item.name)"
          >{{item.name}}</li>
        <li  class="search-item border-bottom" v-show="hasList">
          暂无数据
        </li>
      </ul>
    </div>
   
  </div> 
</template>
<script>
import  Bscroll from  'better-scroll';
import  {mapMutations} from  "vuex"
export default {
  name:"CitySearch",
  props:{
    cities:Object
  },
  data () {
    return{
      keyWord:"",
      list:[],
      timer:null
    }
  },
  computed:{
    hasList () {
      return  !this.list.length
    }
  },
  watch:{
    keyWord(){
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(!this.keyWord){
        this.list=[];
        return
      }
      this.timer=setTimeout(()=>{
        const  result=[];
        for (let i in this.cities){
          this.cities[i].forEach((value)=>{
            if(value.spell.indexOf(this.keyWord)<-1||value.name.indexOf(this.keyWord)>-1){
              result.push(value)
            }
          })
        }
       this.list=result;
      },100)
    }
  },
  mounted () {
    this.scroll=new Bscroll(this.$refs.search);
  },
  methods:{
    handleCityClick(city) {
      console.log(city)
     
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(["changeCity"])
  }
}
</script>
<style lang="stylus" scoped>
.search
  height .72rem
  background #00bcd4
  padding 0 .1rem
  input 
    width 100%
    height .62rem
    line-height .62rem
    text-align center
    padding  0 .1rem 
    box-sizing border-box
    border-radius 0.1rem
    color #666
.search-content
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #fff
  z-index 1
  .search-item
    line-height .62rem
    padding-left .2rem
    color #666
    background #fff
</style>



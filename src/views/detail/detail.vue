<template>
  <div>
    <DetailBanner/>
    <DetailHeader/>
    <DetailList :listAll="list"/>
  </div>
</template>
<script>
import  DetailBanner from "./components/Banner"
import  DetailHeader from "./components/Header"
import  DetailList from "./components/List"
export default {
  name:"Detail",
  data () {
    return {
      list:[
        {
        title:"成人票",
        children:[{
          title:"成人票-海洋馆",
          children:[{
            title:"海洋馆-全票"
          },{
             title:"海洋馆-半价票"
          }
          ]
        },{
          title:"成人票-爬虫公馆"
        }]
        },
         {
        title:"老人票"
        },
        {
        title:"儿童票"
        },
      ]
    }
  },
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>
<style lang="stylus" scoped>

</style>



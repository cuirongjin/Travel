<template>
  <div>
    <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"/>
    <DetailHeader/>
    <DetailList :listAll="categoryList"/>
  </div>
</template>
<script>
import  DetailBanner from "./components/Banner"
import  DetailHeader from "./components/Header"
import  DetailList from "./components/List"
import  axios  from 'axios'
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
      ],
      listId:"",
      sightName:"",
      bannerImg:"",
      gallaryImgs:"",
      categoryList:""
      
    }
  },
  mounted () {
   this.listId =this.$route.params.id
    this.getInfo()
    
  },
  methods:{
    getInfo () {
       axios.get("/api/detail.json",{
       params:{
         id:this.$route.params.id
       }
     })
      .then(this.handleDeati)
    },
    handleDeati (res){
      
      res=res.data.data
      console.log(res)
      this.sightName=res.sightName
      this.bannerImg=res.bannerImg
      this.gallaryImgs=res.gallaryImgs
      this.categoryList=res.categoryList
     
    }
  },
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  // activated () {
  //   console.log("23")
  //   console.log(this.$route.params.id)
  //   if(this.listId!=this.$route.params.id){
  //       this.getInfo()
  //   }
  //   this.listId=this.$route.params.id
   
  // }
 
}
</script>
<style lang="stylus" scoped>

</style>



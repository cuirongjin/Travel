<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"/>
    <city-alphabet 
    :cities="cities"
    @change="handleLetterChange"
    />
  </div>
</template>
<script>
import  CityHeader  from  "./components/header"
import  CitySearch  from  "./components/search"
import  CityList  from  "./components/List"
import  CityAlphabet  from  "./components/Alphabet"
import  axios  from  "axios"
export default {
  name:"City",
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods:{
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res){
      console.log(res)
      res=res.data;
      const  data=res.data;
      this.cities=data.cities
      this.hotCities=data.hotCities
    },
    handleLetterChange (letter){
     this.letter=letter
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>



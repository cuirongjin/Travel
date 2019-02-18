<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list/>
  </div>
</template>
<script>
import  CityHeader  from  "./components/header"
import  CitySearch  from  "./components/search"
import  CityList  from  "./components/List"
export default {
  name:"City",
  components:{
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>
<style lang="stylus" scoped>

</style>



<template>
<div>
  <p id="username">{{name}}</p>
  <p>{{name1.age}}</p>
</div>
</template>

<script>
export default {
  name1:"userInfo",
  data:function(){
    return{
      name:"jack fan",
    }
  },
  inject:{
    name1:{
      from:"pp1",
      default:{
        name:"123123",
        age:"23424"
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  #username{
    color:red;
  }
</style>>
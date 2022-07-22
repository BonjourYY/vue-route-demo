<template>
  <p id="username">{{name}}</p>
</template>

<script>
export default {
  name:"userInfo",
  data:function(){
    return{
      name:"jack fan"
    }
  },
  created:function(){
    throw new Error("This is error")
  },
}
</script>

<style lang="scss" scoped>
  #username{
    color:red;
  }
</style>>
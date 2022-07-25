<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <keep-alive>
      <HelloWorld msg="Hello Vue HELLO VUE HEllo VUE" />
    </keep-alive>
    <fuck-world></fuck-world>
  </div>
</template>
 
<script>

import HelloWorld from './components/HelloWorld.vue'

let FuckWorld = {
  data:function(){
    return {
      age:18
    }
  },
  template:"<p>{{age}}</p>",
}
export default {
  name: 'App',
  components: {
    HelloWorld,
    FuckWorld
  },
  data: () => {
    return {
      a: 1,
    }
  },
  computed: {
    b: {
      get: function () {
        return this.a
      },
      set: function (value) {
        return this.a = value
      }
    }
  },
  watch: {
    a: {
      handler: function (newValue, oldValue) {
        console.log(newValue, oldValue)
      }
    },
    b: {
      handler: function () {
        console.log("b is changed")
      }
    }
  },
  methods: {
    fn1: function (arg) {
      console.log(arg)
    }
  },
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

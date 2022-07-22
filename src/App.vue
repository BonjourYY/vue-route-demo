<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <keep-alive>
      <HelloWorld msg="Hello Vue HELLO VUE HEllo VUE" />
    </keep-alive>
    <p>{{a}}</p>
    <p>{{ b }}</p>
  </div>
</template>
 
<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
  beforeCreate: function () {
    console.log("beforeCreate")
  },
  created: function () {
    console.log("created")
  },
  beforeMount: function () {
    console.log("beforeMount")
  },
  mounted: function () {
    // 保险做法
    this.$nextTick(function () {
      console.log("mounted")
    })
  },
  beforeUpdate: function () {
    console.log("beforeUpdate")
  },
  updated: function () {
    console.log("updated")
  },
  beforeDestroy: function () {
    console.log("brforeDestory")
  },
  destroyed: function () {
    console.log("destoryed")
  },
  errorCaptured:function(err,component,string){
    console.log("App catch descandent components render error")
    console.log(err,component,string)
  }

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

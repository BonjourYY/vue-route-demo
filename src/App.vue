<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello Vue HELLO VUE HEllo VUE" />
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
    console.log(this.$data, this.$el)
  },
  created: function () {
    console.log(this.$data, this.$el)
  },
  beforeMount: function () {
    console.log(this.$data, this.$el)
  },
  mounted: function () {
    // 保险做法
    this.$nextTick(function () {
      console.log(this.$data, this.$el)
    })
  },
  beforeUpdate: function () {
    console.log("data is not changed")
  },
  updated: function () {
    console.log("data is changed")
  },
  beforeDestroy: function () {
    console.log("data is not destory")
  },
  destroyed: function () {
    console.log("data is destoryed")
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

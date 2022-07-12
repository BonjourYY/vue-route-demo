<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input type="text" @keyup="great1($event)">
    <p>{{ obj }}</p>
    <button @click="add">clice me</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

let obj = {
  message: "world-2",
  bar: "456",
  great: 1
}

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      obj
    }
  },
  props: {
    title: {
      type: String,
    }
  },
  methods: {
    great1: function (event) {
      console.log(event)
    },
    name: {
      male: "sex"
    },
    add: function () {
      this.$set(this.$data.obj, "default", "love")
      this.$set(this.$options.methods.name, "default", "love")
      console.log(this.$data.obj)
      console.log(this.$options.methods.name)
    },
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

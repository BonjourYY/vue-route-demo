<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input type="text" @keyup="great1($event)">
    <button @click="add" v-pin:[direction]="value">clice me</button>
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
      obj,
      direction: "top",
      value: "200"
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
    add: function () {
    },
  },
  directives: {
    pin: {
      bind: function (el, binding) {
        el.style.position = "fixed";
        console.log(binding)
        el.style[binding.arg] = binding.value + "px"
      },
    }
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

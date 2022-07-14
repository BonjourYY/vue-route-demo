<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input type="text" @keyup="great1($event)">
    <hello-world-1></hello-world-1>
    <button @click="add" v-pin:[direction]="value">{{direction | myFilter1 | myFilter2}}</button>
    <my-component></my-component>
    <hello-world-1></hello-world-1>
    <my-abc></my-abc>
    <p>{{valueX}}</p>
  </div>

</template>
 
<script>


import HelloWorld from './components/HelloWorld.vue'
let myAbc = {
  template: "<p>131313</p>"
}

let obj = {
  message: "world-2",
  bar: "456",
  great: 1
}

export default {
  name: 'App',
  components: {
    HelloWorld,
    myAbc
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
  // 自定义指令
  directives: {
    pin: {
      bind: function (el, binding) {
        el.style.position = "fixed";
        console.log(binding)
        el.style[binding.arg] = binding.value + "px"
      },
    }
  },
  // 自定义过滤器
  filters: {
    myFilter1: function (value) {
      return value.toString().charAt(0).toUpperCase() + value.toString().slice(1)
    },
    myFilter2: function (value) {
      console.log(value)
      return value;
    }
  },
  computed: {
    valueX: function () {
      return "sdfsdjfl"
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

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

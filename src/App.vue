<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="newVlue" :user-name="undefined" class="world" style="border:1px solid red" name="sadfsdf" />
    <p>{{ name }}</p>
    <p id="mymessage"></p>
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
      name: "fanqinyang",
      sex: "male",
      obj: {
        id: 100,
        content: "woaini"
      },
      msgValue: "sadfsadfsdafsdaf"

    }
  },
  props: {
  },
  methods: {
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

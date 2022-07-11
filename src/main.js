import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false

Vue.config.warnHandler = function (msg, vm, trace) {
  console.log("警告开始")
  console.log(msg)
  console.log(vm)
  console.log(trace)
  console.log("警告结束")
}

// Vue.config.ignoredElements = ["Hello-1-World"]

new Vue({
  el: "#app",
  data: () => {
    return {
      message: "world",
      bar: "456"
    }
  },
  render: function (h) {
    return h(App)
  }
})





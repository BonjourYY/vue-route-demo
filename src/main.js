import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false

Vue.config.warnHandler = function (msg, vm, trace) {
  console.log(`Warn: ${msg}\nTrace: ${trace}`);
}

Vue.config.errorHandler = function (err, vm, info) {
  console.log(`Error: ${err.toString()}\nInfo: ${info}`);
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





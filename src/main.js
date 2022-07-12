import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false

Vue.config.keyCodes = {
  c: [65, 68]
}

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





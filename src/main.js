import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false
Vue.config.performance = true;
// Vue.config.silent = true

console.log(Vue.version)


let aaaaa = new Vue({
  el: "#app",
  render: function (h) {
    return h(App)
  },
  data: (vm) => {
    return {
      name: "fanqinyang",
      sex: "male",
      aa: vm
    }
  }
})

console.log(aaaaa)
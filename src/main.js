import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false
Vue.config.performance = true;

let comA = {
  data: function () {
    return {
      a: 1,
    }
  }
}

new Vue({
  render: function (h) {
    return h(App)
  },
  extends: comA,
}).$mount('#app')

import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false
Vue.config.performance = true;

new Vue({
  render: function (h) {
    return h(App)
  },
}).$mount('#app')

import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false
Vue.config.performance = true;


new Vue({
  el: "#app",
  data: function () {
    return {
      a: { name: "fanqinyang" }
    }
  },
  methods: {
    fn1: function () { }
  },
  render: function (h) {
    return h(App)
  }
})

// 非响应式
// app.$data.b = 2









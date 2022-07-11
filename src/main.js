import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false
// 是否打开控制台 devtools 选项
Vue.config.devtools = false

new Vue({
  el: "#app",
  data: () => {
    return {
      message: "world",
      bar: "456"
    }
  },
  created: function () {
    console.log(this.$options.fqyoption)
  },
  fqyoption: "qin",
  // mixins: [myMixin],
  render: function (h) {
    return h(App)
  }
})





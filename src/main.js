import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false
Vue.config.errorHandler = function (err, vm, info) {
  console.log("发生错误了")
  console.dir({ "错误信息": err, "错误节点": vm, "错误过程": info })
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





import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false
// Vue.config.silent = true

// Vue.config.optionMergeStrategies.fqyoption = function (mixinOptions, componentOptions) {
//   return { componentOptions, name: "343214" }
// }

// console.log(Vue.config.optionMergeStrategies)



// 定义 Mixin 对象
// let myMixin = {
//   myoption: "q23412321",
//   fqyoption: "fan"
// }

// 全局注册混入对象
// Vue.mixin({
//   created: function () {
//     console.log(this)
//   }
// })

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





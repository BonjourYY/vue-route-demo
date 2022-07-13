import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false
Vue.config.performance = true;
// Vue.config.silent = true

// 注册全局组件
let myComponent = Vue.component("my-component", Vue.extend({ template: "<p>33132131356456436</p>" }))
Vue.component("my-component-2", Vue.extend(myComponent))

console.log(Vue.component("my-component"))

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









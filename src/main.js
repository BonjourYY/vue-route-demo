import Vue from 'vue'
import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false
Vue.config.performance = true;
// Vue.config.silent = true



// 注册全局组件
Vue.component("my-component", Vue.extend({ template: "<p>33132131356456436</p>", props: ["title"] }))

Vue.component('hello-world-1', {
  template: '#hello-world-template'
})

let state = Vue.observable({ count: 0 })

console.log(Vue.version)


new Vue({
  el: "#app",
  data: function () {
    return { name1: "qi" }
  },
  // render: function (h) {
  //   return h("p", { class: "fanqinyang" }, [h("span", `count is: ${this.countComputed}`)])
  // },
  render: function (h) {
    return h(App)
  },
  computed: {
    countComputed: function () {
      return state.count + 100
    }
  }
})









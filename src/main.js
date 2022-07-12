import Vue from 'vue'
// import App from "./App.vue"

// Vue Global Config
Vue.config.productionTip = false

Vue.config.performance = true;

let mycomponent = Vue.extend({
  template: "<p>我是范勤阳<p>"
})

let myComponent = new mycomponent();
myComponent.$mount("#app")

// new Vue({
//   el: "#app",
//   data: () => {
//     return {
//       message: "world",
//       bar: "456"
//     }
//   },
//   render: function (h) {
//     return h(App)
//   }
// })





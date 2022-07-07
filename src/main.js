import Vue from 'vue'

Vue.config.productionTip = false

console.log(window.location.pathname)


const About = { template: "<p>this is about page</p>" };
const NotFound = { template: "<p>not found</p>" };
const Home = { template: "<p>Home page</p>" }


const routers = {
  "/about": About,
  "/": Home,
}

const app = new Vue({
  el: "#app",
  data: () => {
    return {
      currentView: window.location.pathname
    }
  },
  computed: {
    view: function () {
      return routers[this.currentView] ? routers[this.currentView] : NotFound
    }
  },
  render: function (h) {
    return h(this.view)
  }
})

console.log(app.view)


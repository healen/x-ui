import Vue from 'vue'import Xui from 'x-ui'import "x-ui/x-css/lib/index.css"import App from './App.vue'import router from './router'import store from './store'Vue.use(Xui)/** vue扩展属性方法* */Vue.config.productionTip = falseif (window.innerWidth < 800) {  window.location.href ="#/demo";} else {  window.location.href ="#/";}new Vue({  router,  store,  render: h => h(App)}).$mount('#app')
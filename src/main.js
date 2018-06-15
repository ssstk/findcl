// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 更改title
var install = function(Vue) {
  var setWechatTitle = function(title, img) {
    if (title === undefined || window.document.title === title) {
      return
    }
    document.title = title
  }
  Vue.directive('wechat-title', function(el, binding) {
    setWechatTitle(binding.value, el.getAttribute('img-set') || null)
  })
}
Vue.use(install)

import '@/assets/css/style.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

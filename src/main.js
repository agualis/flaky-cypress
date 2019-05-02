import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import '../semantic/dist/semantic.rtl.css'
import './styles/main.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'vue-select/dist/vue-select.css'

Vue.config.productionTip = false

Vue.use(SuiVue)
Vue.use(VueSweetalert2)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

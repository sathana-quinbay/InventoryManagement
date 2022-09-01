import Vue from 'vue'
import App from './App.vue'
import router from '@/route/index'
import store from '@/store/index'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue' 
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion/]
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.filter('sellerIdFilter', (sellerId)=>{
    return sellerId.substring(21);
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

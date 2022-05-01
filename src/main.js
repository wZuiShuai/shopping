import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import TypeNav from '@/components/TypeNav'
import store from '@/store/'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import Pagin from './components/Pagin'
import {MessageBox} from 'element-ui'
import VueLazyload from 'vue-lazyload'
import la from '@/assets/la.gif'
import '@/plugins/validate'

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagin.name,Pagin)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.use(VueLazyload,{
  loading:la
})

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')
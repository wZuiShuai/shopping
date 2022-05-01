import Vue from "vue";
import Vuex from "vuex"
import home from "@/store/home/index"
import search from "@/store/search/index"
import detail from '@/store/detail'
import shoppingcart from '@/store/shoppingcert'
import user from '@/store/uesr'
import trade from '@/store/trade'
import order from '@/store/order'
import orderlist from '@/store/orderlist'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        //命名空间到底叫什么名
        home,
        search,
        detail,
        shoppingcart,
        user,
        trade,
        order,
        orderlist
    }
})

import { getOrderStatus, getPaymentMessage, submitOrder } from "@/api"

const state = {
    data:0,
    payMessage:{}
}
const mutations = {
    SETORDER(state,data){
        state.data = data
    },
    GETPAYMESSAGE(state,payMessage){
        state.payMessage = payMessage
    }
}
const actions = {
    async setOrder({ commit }, Order) {
        let { tradeNo, data } = Order
        let result = await submitOrder(tradeNo, data)
        if(result.code === 200) {
            commit('SETORDER',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    async getPayMessage({commit},orderId){
        let result = await getPaymentMessage(orderId)
        if(result.code === 200){
            commit('GETPAYMESSAGE',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    async getStatus({},orderId){
        let result = await getOrderStatus(orderId)
        if(result.code === 200 || result.code === 205){
            return 'ok'
        }else{
            return Promise.reject(new Error('支付中'))
        }
    }
}
const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}
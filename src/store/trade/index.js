import { getShoppingNews, getUserAddress } from "@/api"

const state = {
    address:[],
    shoppingNew:{}
}
const mutations = {
    GETADDRESS(state,address){
        state.address = address
    },
    GETSHOPPINGNEW(state,shoppingNew){
        state.shoppingNew = shoppingNew
    }
}
const actions = {
    async getAddress({commit}){
        let result = await getUserAddress()
        if(result.code === 200){
            commit('GETADDRESS',result.data)
        }
    },
    async getShoppingNew({commit}){
        let result = await getShoppingNews()
        if(result.code === 200){
            commit('GETSHOPPINGNEW',result.data)
        }
    }
}
const getters = {}


export default{
    state,
    mutations,
    actions,
    getters
}
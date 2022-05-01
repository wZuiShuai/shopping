import { getOrderList } from "@/api"

const state = {
    data:{}
}
const mutations = {
    GETLIST(state,data){
        state.data = data
    }
}
const actions = {
    async getList({commit},data){
        let {page,limit} = data
        let result = await getOrderList(page,limit)
        if(result.code === 200){
            commit('GETLIST',result.data)
            return 'ok'
        }else{
            return Promise.resolve(new Error(result.message))
        }
    }
}
const getters = {
    data(state){
        return state.data
    }
}


export default{
    state,
    mutations,
    actions,
    getters
}
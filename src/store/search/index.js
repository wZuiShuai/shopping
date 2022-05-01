import { reqGetSerch } from "@/api"

const state = {
  params:{}
}
const mutations = {
  GETSEARCHLIST(state,params){
    state.params = params
  }
}
const actions = {
  async getSearchList({commit},params = {}){
    let result = await reqGetSerch(params)
    if(result.code === 200){
      commit('GETSEARCHLIST',result.data)
      
    }
  }
}
const getters = {
  goodsList(state){
    return state.params.goodsList || []
  },
  attrsList(state){
    return state.params.attrsList || []
  },
  trademarkList(state){
    return state.params.trademarkList || []
  }
}

export default {
    state,
    mutations,
    actions,
    getters
  }
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";
const state = {
    value: [],
    bannerList: [],
    floorList: [],
}
const mutations = {
    PRODUCTLIST(state, value) {
        state.value = value
    },
    REQGETBANNERLIST(state, value){
        state.bannerList = value
    },
    REQGETFLOORLIST(state, value){
        state.floorList = value
    },
}
const actions = {

    async ProductList({ commit }) {
        let result = await reqCategoryList();
        if (result.code === 200) {
            commit('PRODUCTLIST', result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if(result.code === 200){
            commit('REQGETBANNERLIST',result.data)
        }
    },
    async getFloorList({commit}){
        let result = await reqGetFloorList();
        if(result.code === 200){
            commit('REQGETFLOORLIST',result.data)
        }
    }
}

export default {
    state,
    mutations,
    actions
}
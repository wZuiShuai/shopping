import {reqGetgoods, reqGetShoppingCart} from '@/api'
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodslist:{},
    uuid_token:getUUID()
}
const mutations = {
    GETGOODSLIST(state,goodslist){
        state.goodslist = goodslist
    }
}
const actions = {
    async getGoodsList({commit},skuId){
        let result = await reqGetgoods(skuId)
        if(result.code === 200){
            commit('GETGOODSLIST',result.data)
        }
    },
    async getShoppingCart({commit},{skuId,skuNum}){
        let result = await reqGetShoppingCart({skuId,skuNum})
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error("购物车出错"));
        }
    }
}
const getters = {
    categoryView(state){
        return state.goodslist.categoryView || {}
    },
    skuInfo(state){
        return state.goodslist.skuInfo || {}
    },
    spuSaleAttrList(){
        return state.goodslist.spuSaleAttrList || []
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}
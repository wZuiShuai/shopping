import { reqGetCartList, reqGetDeletecart, reqReviseChoose } from "@/api"

const state = {
    cartList:[]
}
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList
    }
}
const actions = {
    async getCartList({commit}){
        let result = await reqGetCartList()
        if(result.code === 200){
            commit('GETCARTLIST',result.data)
        }
    },
    async deleteItem({},skuId){
        let result = await reqGetDeletecart(skuId)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error("未删除成功"));
        }
    },
    async reviseChecked({},{skuId,isChecked}){
        let result = await reqReviseChoose(skuId,isChecked)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error("错误"));
        }
    },
    deleteAllChecked({dispatch,getters}){
        let PromiseAll = []
        getters.cartList[0].cartInfoList.forEach(item => {
            let Promise = item.isChecked == 1 ? dispatch('deleteItem',item.skuId) : ''
            PromiseAll.push(Promise)
        });
        return PromiseAll
    },
    checkedAllShopping({dispatch,state},isChecked){
        isChecked = isChecked ? 1 : 0
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach((item)=>{
            if(item.isChecked == 0){
                let Promise = dispatch('reviseChecked',{skuId:item.skuId,isChecked})
                PromiseAll.push(Promise)
            }
            else if(item.isChecked == 1){
                let Promise = dispatch('reviseChecked',{skuId:item.skuId,isChecked})
                PromiseAll.push(Promise)
            }  
        })
        return PromiseAll
    }
}
const getters = {
    cartList(state){
        return state.cartList || []
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}
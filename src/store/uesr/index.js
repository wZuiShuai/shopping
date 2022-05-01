import { getUser, loginList, reqGetCode, reqGetRegister, signOut } from "@/api"
const state = {
    phone:'',
    token:localStorage.getItem('TOKEN'),
    userInfo: {},
}
const mutations = {
    GETCODELIST(state,phone){
        state.phone = phone
    },
    SETLOGIN(state,token){
        state.token = token
    },
    GETUSERLIST(state,userInfo){
        state.userInfo = userInfo
    },
    CLAER(state){
        state.phone = ''
        state.token = localStorage.removeItem('TOKEN')
        state.userInfo = {}
    }
}
const actions = {
    async getCodeList({commit},phone){
        let result = await reqGetCode(phone)
        if(result.code === 200){
            commit('GETCODELIST',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error("错误"));
        }
    },
    async setRegister({},data){
        let result = await reqGetRegister(data)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message));
        }
    },
    async setLogin({commit},data){
        let result = await loginList(data)
        if(result.code === 200){
            commit('SETLOGIN',result.data.token)
            localStorage.setItem('TOKEN',result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    async getUserList({commit}){
        let result = await getUser()
        if(result.code === 200){
            commit('GETUSERLIST',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    async loginOut({commit}){
        let result = await signOut()
        if(result.code === 200){
            commit('CLAER')
            return 'ok'
        }else{
            return Promise.reject(new Error(result.message))
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
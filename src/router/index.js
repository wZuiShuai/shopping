import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routers'
import store from '@/store';

Vue.use(VueRouter)

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.push;

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

const router = new VueRouter({
    routes,
    scrollBehavior() {
        // 始终滚动到顶部
        return { y: 0 }
    },
})

router.beforeEach(async (to, _, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/home')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch('getUserList')
                    next()
                } catch (error) {
                    await store.dispatch('loginOut')
                    next('/login')
                }
            }
        }
    } else {
        console.log(to)
        let toPath = to.path
        if(toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1 || toPath.indexOf('trade') != -1){
            next({name:'login',query:{toPath}})
        }else{
            next()
        }
        
    }

})

export default router
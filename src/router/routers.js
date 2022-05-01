export default[
    {
        path: '/',
        redirect:{name:'home'}
    },
    {   name:'login',
        path:'/login',
        component:()=>import('@/pages/Login'),
        meta:{show:false}
    },
    {   name:'register',
        path:'/register',
        component:()=>import('@/pages/Register'),
        meta:{show:false}
    },
    {   name:'home',
        path:'/home',
        component:()=>import('@/pages/Home/home.vue'),
        meta:{show:true}
    },
    {   name:'search',
        path:'/search/:keyword?',
        component:()=>import('@/pages/Search'),
        meta:{show:true}
    },
    {   name:'detail',
        path:'/detail/:skuId',
        component:()=>import('@/pages/Detail'),
        meta:{show:true}
    },
    {   name:'shopping',
        path:'/shopping',
        component:()=>import('@/pages/AddCartSuccess'),
        meta:{show:true}
    },
    {   name:'shoppingCart',
        path:'/shoppingcart',
        component:()=>import('@/pages/ShopCart'),
        meta:{show:true}
    },
    {   name:'trade',
        path:'/trade',
        component:()=>import('@/pages/Trade'),
        meta:{show:true},
        beforeEnter: (_, from, next) => {
            if(from.path == '/shoppingcart'){
                next()
            }else{
                console.log(from)
                next('/shoppingcart')
            }
        }
    },
    {   name:'pay',
        path:'/pay',
        component:()=>import('@/pages/Pay'),
        meta:{show:true},
        beforeEnter: (_, from, next) => {
            if(from.path == '/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {   name:'paysuccess',
        path:'/paysuccess',
        component:()=>import('@/pages/PaySuccess'),
        meta:{show:true},
        beforeEnter: (_, from, next) => {
            if(from.path == '/pay'){
                next()
            }else{
                next(false)
            }
        }
    },
    {   name:'center',
        path:'/center',
        component:()=>import('@/pages/Center'),
        meta:{show:true},
        children:[
            {
                path:'/center',
                redirect:{name:'myorder'}
            },
            {
                name:'myorder',
                path:'myorder',
                component:()=>import('@/pages/Center/MyOrder')
            },
            {
                name:'grouppurchaseorder',
                path:'grouppurchaseorder',
                component:()=>import('@/pages/Center/GroupPurchaseOrder')
            }
        ]
    }
]
///api/product/getBaseCategoryList

import requests from "./request";
import mockRequests from "./mockRequest";

export const reqCategoryList = () => {
    return requests({
        url: 'product/getBaseCategoryList',
        method: 'get'
    })
}
export const reqGetBannerList = () => {
    return mockRequests.get('/banner');
}
export const reqGetFloorList = () => {
    return mockRequests.get('/floor');
}


export const reqGetSerch = (params) => {
    return requests({
        url: '/list',
        method: 'post',
        data: params
    })
}

//   /api/item/{ skuId }
export const reqGetgoods = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })


// /api/cart/addToCart/{ skuId }/{ skuNum }    post
export const reqGetShoppingCart = ({ skuId, skuNum }) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}` ,method:'post'})


export const reqGetCartList = ()=>requests({url:'/cart/cartList ',method:'get'});


// /api/cart/deleteCart/{skuId}  DELETE
export const reqGetDeletecart = (skuId)=> requests({url:`/cart/deleteCart/${skuId}`,method:'DELETE'})


// /api/cart/checkCart/{skuId}/{isChecked}   get
export const reqReviseChoose = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})


// /api/user/passport/sendCode/{phone}   get
export const reqGetCode = (phone) => requests({url:`/user/passport/sendCode/${phone}`,method:'get'})


// /api/user/passport/register   post
export const reqGetRegister = (data) => requests({url:'/user/passport/register',data,method:'post'})


// /api/user/passport/login    post 
export const loginList = (data) => requests({url:'/user/passport/login',data,method:'post'})


// /api/user/passport/auth/getUserInfo  get
export const getUser = () => requests({url:'/user/passport/auth/getUserInfo',method:'get'})


// /api/user/passport/logout   get
export const signOut = () => requests({url:'/user/passport/logout',method:'get'})


// /api/user/userAddress/auth/findUserAddressList    get
export const getUserAddress = () => requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})


// /api/order/auth/trade     get
export const getShoppingNews = () => requests({url:'/order/auth/trade',method:'get'})


// /api/order/auth/submitOrder?tradeNo={tradeNo}  post
export const submitOrder = (tradeNo,data) => requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})


// /api/payment/weixin/createNative/{orderId}   get
export const getPaymentMessage = (orderId) => requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})


// /api/payment/weixin/queryPayStatus/{orderId}   get
export const getOrderStatus = (orderId) => requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})


// /api/order/auth/{page}/{limit}    get
export const getOrderList = (page,limit) => requests({url:`/order/auth/${page}/${limit}`,method:'get'})
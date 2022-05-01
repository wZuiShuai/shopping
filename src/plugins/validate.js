import Vue from 'vue';
import { ValidationProvider, extend, localize, ValidationObserver } from 'vee-validate';
import { required} from 'vee-validate/dist/rules'
import zh_CN from 'vee-validate/dist/locale/zh_CN.json';
localize('zh_cn',zh_CN)


extend('required',{
    ...required,
    message:'不能为空'
})

// Add a rule.
extend('phone', {
    validate: value => /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(value),
    message: '请输入正确的手机号！',
});

extend('password', {
    params: ['confirm'],
    validate(value, { confirm }) {
        return value === confirm;
    },
    message: '密码确认不匹配'
});
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver',ValidationObserver);

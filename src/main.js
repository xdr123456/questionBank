import Vue from 'vue'
import App from './App.vue'
import router from './router'


import 'element-ui/lib/theme-chalk/index.css';
import { Button, Input, Form, FormItem, Message } from 'element-ui'

Vue.use(Button).use(Input).use(Button).use(Form).use(FormItem)
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
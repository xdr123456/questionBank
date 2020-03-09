import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './mock/'


import 'element-ui/lib/theme-chalk/index.css';
import { Button, Input, Form, FormItem, Message, Container, Header, Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'

Vue.use(Button).use(Input).use(Button).use(Form).use(FormItem).use(Container).use(Header).use(Aside).use(Main)
    .use(Menu).use(Submenu).use(MenuItem).use(MenuItemGroup)

Vue.prototype.$message = Message
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
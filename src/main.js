import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './mock/'


import 'element-ui/lib/theme-chalk/index.css';
import {
    Button,
    Input,
    Form,
    FormItem,
    Message,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Avatar,
    TableColumn,
    Table,
    Dialog,
    Select,
    Option,
    Radio,
    RadioGroup,
    RadioButton,
    InputNumber,
    Tree
} from 'element-ui'

Vue.use(Button).use(Input).use(Form).use(FormItem).use(Container).use(Header).use(Aside).use(Main).use(Avatar).use(TableColumn).use(Table)
    .use(Menu).use(Submenu).use(MenuItem).use(MenuItemGroup).use(Dialog).use(Select).use(Option).use(Radio).use(RadioGroup).use(RadioButton)
    .use(InputNumber).use(Tree)


Vue.prototype.$message = Message
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
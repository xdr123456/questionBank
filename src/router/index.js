import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../views/Home.vue'
import Welcome from '../components/Welcome.vue'
import List from '../components/List.vue'
import Node from '../components/Node.vue'
import Add from '../components/Add.vue'
import Tagmange from '../components/Tagmange.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/1',
        children: [{
                path: '/1',
                name: 'Welcome',
                component: Welcome,
                meta: { title: 'Welcome' }
            },
            {
                path: '/2-1',
                name: 'List',
                component: List,
                meta: { title: 'List' },
            },
            {
                path: '/3',
                name: 'Node',
                component: Node,
                meta: { title: 'Node' }
            },
            {
                path: '/4',
                name: 'Add',
                component: Add,
                meta: { title: 'Add' }
            },
            {
                path: '/5',
                name: 'Tagmange',
                component: Tagmange,
                meta: { title: 'Tagmange' }
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import goTo from 'vuetify/lib/services/goto'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/todo',
        name: 'Todo',
        component: () => import(/* webpackChunkName: "about" */ '../views/Todo.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `My Work - ${to.name}`
    next()
})
router.afterEach((to, from) => {
    goTo(0, {duration: 0})
})

export default router

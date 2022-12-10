import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/screens/Home.vue'
import scr2 from './components/screens/scr2.vue'

import './assets/main.css'

export const routes = [
    { path: '/', component: Home },
    { path: '/page', component: scr2 },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
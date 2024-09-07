import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../components/About.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
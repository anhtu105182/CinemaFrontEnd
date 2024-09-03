// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/Homepage.vue';
import news from '../views/news.vue';
import ComingSoonMovie from '../views/ComingSoonMovie.vue';
import NewsActive from '../views/NewsActive.vue';
import MyTicket from '../views/MyTicket.vue';


const routes = [
    { 
        path: '/', 
        name: 'Homepage', 
        component: Homepage 
    },
    { 
        path: '/news', 
        name: 'news', 
        component: news 
    },
    { 
        path: '/ComingSoonMovie', 
        name: 'ComingSoonMovie', 
        component: ComingSoonMovie 
    },
    { 
        path: '/news/NewsActive', 
        name: 'NewsActive', 
        component: NewsActive 
    },
    { 
        path: '/news/MyTicket', 
        name: 'MyTicket', 
        component: MyTicket 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

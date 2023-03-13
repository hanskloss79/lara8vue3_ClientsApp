import { createRouter, createWebHistory } from "vue-router";

import ClientIndex from '../components/clients/ClientIndex.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'client.index',
        component: ClientIndex
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
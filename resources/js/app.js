import ('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

// here is Vue app

import { createApp } from 'vue';
import router from './router';

import ClientIndex from './components/clients/ClientIndex.vue';

createApp({
    components: {
        ClientIndex
    }
}).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import router from './router'

import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const matchmaking = createApp(App)
matchmaking.use(VueSidebarMenu)
matchmaking.use(router)
matchmaking.mount('#app')

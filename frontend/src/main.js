import { createApp } from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'


const matchmaking = createApp(App)
matchmaking.use(VueSidebarMenu)
matchmaking.mount('#app')

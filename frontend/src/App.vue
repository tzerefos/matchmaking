<template>
  <HomePage />
  <SidebarMenu :menu="menu"/>
  <WeddingPlanners />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import WeddingPlanners from './components/WeddingPlanners.vue'
import HomePage from './components/HomePage.vue'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

export default {
  name: 'App',
  components: {
    HomePage, WeddingPlanners, SidebarMenu
  },
  data: () => ({

    menu: [
      {
        header: 'Main Navigation',
        hiddenOnCollapse: true
      },
      {
        href: '/',
        title: 'Dashboard',
        icon: 'fa fa-user'
      },
      {
        href: '/agents',
        title: 'Wedding Planners',
        icon: 'fa fa-user'
      },
    ]
  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #d3d3d3;
  height: inherit;
  width: inherit;
}
html, body {
    height:100%; /*both html and body*/
}
body {
    margin: 0; /*reset default margin*/
}
</style>

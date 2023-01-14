<template>
  <br>
  <v-content>
    <router-view></router-view>
  </v-content>
  <SidebarMenu :menu="menu" theme="dark-theme"/>
  <!-- <WeddingPlanners /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import WeddingPlanners from './components/WeddingPlanners.vue'
// import HomePage from './components/HomePage.vue'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

export default {
  name: 'App',
  components: {
    SidebarMenu //WeddingPlanners
  },
  data: () => ({

    menu: [
      {
        header: 'Main Navigation',
        hiddenOnCollapse: true
      },
      {
        href: '/',
        title: 'Home',
        icon: 'fa fa-user'
      },
      {
        href: '/WeddingPlanners',
        title: 'Wedding Planners',
        icon: 'fa fa-user'
      },
      {
        href: '/WeddingProperties',
        title: 'Wedding Properties',
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
  background-color: white; /* #d3d3d3; */
  height: inherit;
  width: inherit;
}
html, body {
    height:100%; /*both html and body*/
    margin-left: 65px;
}
body {
    margin: 0; /*reset default margin*/
}
.v-sidebar-menu .vsm--link_active {
  box-shadow: inset 3px 0 0 0 yellow !important;
}
.v-sidebar-menu .vsm--mobile-bg {
  background-color: #d3d3d3;
  color: black !important;
}
.v-sidebar-menu  .vsm--icon{
  background-color: #d3d3d3 !important;
}
/*.vsm--title {
  color: black !important;
}*/
</style>

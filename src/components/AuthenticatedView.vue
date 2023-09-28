<template>
  <div id="main" class="d-flex flex-nowrap">
    <NavBar></NavBar>
    <SideBar></SideBar>
    <router-view></router-view>
  </div>
</template>
  
<script>
import NavBar from './NavBar.vue';
import SideBar from './SideBar.vue'

export default {
  name: 'AuthenticatedView',
  components: {
    NavBar,
    SideBar
  }
}
</script>
  
<style>
#main {
  height: 100vh;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
  
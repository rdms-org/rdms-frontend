<template>
  <div id="main" class="d-flex flex-nowrap">
    <SideBar></SideBar>
    <div id="contents">
      <router-view></router-view>
    </div>
  </div>
</template>
  
<script>
import SideBar from './SideBar.vue'

export default {
  name: 'AuthenticatedView',
  components: {
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

#contents{
  padding: 16px;
}
</style>
  
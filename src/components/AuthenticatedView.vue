<template>
  <div id="main" class="d-flex">
    <SideBar></SideBar>
    <div id="contents" class="flex-grow-1">
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
  background-color: #F6F6F6;
}


#contents{
  width: calc(100vw - 280px);
  padding: 16px;  
}
</style>
  
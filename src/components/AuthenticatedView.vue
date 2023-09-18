<template>
    <div>
      <NavBar></NavBar>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import NavBar from './NavBar.vue';
  
  export default {
    name: 'AuthenticatedView',
    components: {
      NavBar,
    }
  }
  </script>
  
  <style>
  </style>
  
<template>
  <div id="sidebar" class="d-flex flex-column p-3 text-bg-dark" style="width: 280px;">
    <router-link to="/dashboard">
      <img src="@/assets/logo/primary_light.png" alt="" height="40">
    </router-link>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link"
          :class="{ 'active': $route.path == '/dashboard', 'text-white': $route.path != '/dashboard' }">
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/devices" class="nav-link"
          :class="{ 'active': $route.path == '/devices', 'text-white': $route.path != '/devices' }">
          Devices
        </router-link>
      </li>
      <li>
        <router-link to="/users" class="nav-link"
          :class="{ 'active': $route.path == '/users', 'text-white': $route.path != '/users' }">
          Users
        </router-link>
      </li>
      <li>
        <router-link to="/logs" class="nav-link"
          :class="{ 'active': $route.path == '/logs', 'text-white': $route.path != '/logs' }">
          Logs
        </router-link>
      </li>
      <li>
        <router-link to="/info" class="nav-link"
          :class="{ 'active': $route.path == '/info', 'text-white': $route.path != '/info' }">
          Info
        </router-link>
      </li>
      <hr v-if="$store.state.userData.root_permission">
      <li v-if="$store.state.userData.root_permission">
        <router-link to="/admins" class="nav-link"
          :class="{ 'active': $route.path == '/admins', 'text-white': $route.path != '/admins' }">
          Admins
        </router-link>
      </li>
      <li v-if="$store.state.userData.root_permission">
        <router-link to="/audits" class="nav-link"
          :class="{ 'active': $route.path == '/audits', 'text-white': $route.path != '/audits' }">
          Audits
        </router-link>
      </li>
    </ul>
    
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown" aria-expanded="false">
        <img src="@/assets/icon/user.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>{{$store.state.userData.name}}</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" @click="logout()">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SideBar',
  methods: {
    logout:async function(){
      axios.get(`${this.$store.state.apiURL}/auth/logout`)
        .then(() => {
          this.$router.go(0);
        })
        .catch(() => {
          this.$router.go(0);
        })
    }
  }
}
</script>

<style>
#sidebar {
  height: 100vh;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}

#sidebar .dropdown-toggle {
  outline: 0;
}

#sidebar .active {
  background-color: #822DE2;
}
</style>
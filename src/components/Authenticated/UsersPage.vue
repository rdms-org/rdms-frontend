<template>
  <div id="users" class="container-fluid">

    <span>Users</span>
    <div class="menu">
      <button type="button" class="btn btn-violet" data-bs-toggle="modal" data-bs-target="#addUserModal">+ Add User</button>
    </div>
    <div class="infoTable table-responsive small">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">이름</th>
            <th scope="col">학번</th>
            <th scope="col">연락처</th>
            <th scope="col">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, i) in $store.state.userData" :key="i">
            <td>{{ user.name }}</td>
            <td>{{ getDateformat(user.creation_time) }}</td>
            <td>보관중</td>
            <td>-</td>
            <td>-</td>
          </tr>

        </tbody>
      </table>
    </div>
    <addUserModal />
    <OTPModal />
    <UserResultModal />
  </div>
</template>

<script>
import AddUserModal from "./Users/AddUserModal.vue";
import UserResultModal from "./Users/UserResultModal.vue";

export default {
  name: 'UsersPage',
  components: {
    AddUserModal,
    UserResultModal
  },
  mounted() {
    this.$store.dispatch("getUserData")
  }
}
</script>

<style>
#users {
  height: 100%;
}

#users>span {
  display: block;
  font-size: 30px;
  height: auto;
}

#users>.menu {
  margin-top: 12px;
}

#users>.infoTable {
  margin: 20px 0;
}
</style>
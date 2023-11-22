<template>
  <div id="LoginBackground">
    <div id="LoginPage" class="d-flex flex-column mb-3">
      <form @submit="login">
        <img class="mb-4" src="@/assets/logo/primary_dark.png" alt="" height="100">
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingInput" placeholder="Username" v-model="username"
            autocomplete="off" required>
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password"
            autocomplete="off" required>
          <label for="floatingPassword">Password</label>
        </div>
        <button class="btn w-100 py-2">Sign in</button>
        <span v-if="loginError">아이디 또는 비밀번호가 틀렸습니다.</span>
      </form>

    </div>
  </div>
</template>

<script>
import bcryptjs from 'bcryptjs';
import axios from 'axios';
export default {
  name: 'loginPage',
  data() {
    return {
      username: "",
      password: "",
      loginError: false,
    }
  },
  methods: {
    // 로그인 기능
    login: async function (e) {
      e.preventDefault();
      for (let element of e.target) {
        element.disabled = true;
      }
      //비밀번호 해싱
      const hash = await bcryptjs.hash(this.password, this.$store.state.salt);
      //로그인 요청
      axios.post(`${this.$store.state.apiURL}/auth/login`, { username: this.username, password: hash })
        .then((res) => {
          for (let element of e.target) {
            element.disabled = false;
          }
          if (res.data.message == "Success") {
            this.$store.commit("setClientData", res.data.data)
            this.$router.push("/dashboard");
          } else {
            this.loginError = true;

          }
        })
        .catch(() => {
          for (let element of e.target) {
            element.disabled = false;
          }
          this.loginError = true;
        })
    }
  }
}
</script>

<style>
#LoginBackground{
  background-color: #F6F6F6;
}

#LoginPage {
  width: 460px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
}

#LoginPage>div {
  margin-bottom: 30px;
}

#LoginPage>form>div>#floatingInput {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

#LoginPage>form>div>#floatingPassword {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

#LoginPage>form>.form-floating:focus-within {
  z-index: 2;
}

#LoginPage>form>span {
  color: #FF0032;
}

#LoginPage>form>button {
  margin-top: 30px;
  background-color: #822DE2;
  color: white;
}
</style>
<template>
  <div id="LoginPage" class="d-flex flex-column mb-3">
    <form>
      <img class="mb-4" src="@/assets/Logo.png" alt="" height="100" >
      <div class="form-floating">
        <input type="text" class="form-control" id="floatingInput" placeholder="Username" autocomplete="off">
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" autocomplete="off">
        <label for="floatingPassword">Password</label>
      </div>

      <button class="btn w-100 py-2" type="submit">Sign in</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'loginPage',
}
</script>

<style>
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

#LoginPage>form>button {
  margin-top: 30px;
  background-color: #822DE2;
  color: white;
}
</style>
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      apiURL:"/api",
      salt:"$2a$12$Pzck2SUWG.WcYYmSno9gke",
      userData:{},
    }
  },
  mutations:{
    setUserData(state,data){
      state.userData = data
    }
  }
})

export default store
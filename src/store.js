import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state(){
    return {
      apiURL:"/api",
      salt:"$2a$12$Pzck2SUWG.WcYYmSno9gke",
      userData:{},
      deviceData:[],

    }
  },
  mutations:{
    setUserData(state,data){
      state.userData = data
    },
    setDeviceData(state){
      axios.get(`${state.apiURL}/devices`)
        .then((res) => {
          if (res.data.message == "Success") {
            state.deviceData = res.data.data
            console.log(state.deviceData)
            return true
          } else {
            return false

          }
        })
        .catch(() => {
          return false
        })
    }
  }
})

export default store
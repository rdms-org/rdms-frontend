import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state() {
    return {
      apiURL: "/api",
      salt: "$2a$12$Pzck2SUWG.WcYYmSno9gke",
      userData: {},
      deviceData: [],
      OTP: {},

    }
  },
  mutations: {
    setUserData(state, data) {
      state.userData = data
    },
    setOTP(state,data){
      state.OTP = data
    },
    setDeviceData(state) {
      axios.get(`${state.apiURL}/devices`)
        .then((res) => {
          if (res.data.message == "Success") {
            state.deviceData = res.data.data
            return true
          } else {
            return false

          }
        })
        .catch(() => {
          return false
        })
    },
  },
  actions: {
    genOTP(state, data) {
      return axios.post(`${this.state.apiURL}/auth/otp/gen`, data)
        .then((res) => {
          if (res.data.message == "Success") {
            this.commit("setOTP",res.data.data)
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
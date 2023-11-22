import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state() {
    return {
      apiURL: "/api",
      salt: "$2a$12$Pzck2SUWG.WcYYmSno9gke",
      userData: {},
      deviceData: [],
      otp: {},
      otpResult:{},

    }
  },
  mutations: {
    setUserData(state, data) {
      state.userData = data
    },
    setOTP(state,data){
      state.otp = data
    },
    setOTPResult(state,data){
      state.otpResult = data
    },
    setDeviceData(state,data) {
      state.deviceData = data
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
    },
    getDeviceData(){
      axios.get(`${this.state.apiURL}/devices`)
        .then((res) => {
          if (res.data.message == "Success") {
            this.commit("setDeviceData",res.data.data)
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
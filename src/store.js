import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state() {
    return {
      apiURL: "/api",
      salt: "$2a$12$Pzck2SUWG.WcYYmSno9gke",
      clientData: {},
      deviceData: [],
      userData: [],
      otp: {},
      otpResult: {},
      addUserResult:{},

    }
  },
  mutations: {
    setClientData(state, data) {
      state.clientData = data
    },
    setOTP(state, data) {
      state.otp = data
    },
    setOTPResult(state, data) {
      state.otpResult = data
    },
    setDeviceData(state, data) {
      state.deviceData = data
    },
    setUserData(state, data) {
      state.userData = data
    },
    setUserResult(state, data){
      state.addUserResult = data
    }

  },
  actions: {
    genOTP(state, data) {
      return axios.post(`${this.state.apiURL}/auth/otp/gen`, data)
        .then((res) => {
          if (res.data.message == "Success") {
            this.commit("setOTP", res.data.data)
            return true
          } else {
            return false

          }
        })
        .catch(() => {
          return false
        })
    },
    getDeviceData() {
      axios.get(`${this.state.apiURL}/devices`)
        .then((res) => {
          if (res.data.message == "Success") {
            this.commit("setDeviceData", res.data.data)
            return true
          } else {
            return false

          }
        })
        .catch(() => {
          return false
        })
    },
    addUser(state, data){
      return axios.post(`${this.state.apiURL}/users`, data)
        .then((res) => {
          if (res.data.message == "Success") {
            this.commit("setUserResult", res.data.data)
            return true
          } else {
            return false

          }
        })
        .catch(() => {
          return false
        })
    },
    getUserData() {
      axios.get(`${this.state.apiURL}/users`)
        .then((res) => {
          if (res.data.message == "Success") {
            this.commit("setUserData", res.data.data)
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
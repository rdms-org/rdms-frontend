import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      apiURL:"http://localhost:5000/api",
      salt:"$2a$12$Pzck2SUWG.WcYYmSno9gke",
    }
  },
})

export default store
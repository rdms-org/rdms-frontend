import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      apiURL:"http://localhost:5000/api",
      saltRounds:12,
    }
  },
})

export default store
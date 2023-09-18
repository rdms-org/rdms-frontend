import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      apiURL:"http://localhost:5000/api",
    }
  },
})

export default store
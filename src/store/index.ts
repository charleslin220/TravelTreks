import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'

interface cityStateItem {
    city: string
  }

// Create a new store instance.
const store = createStore({
    state,
    mutations,
    getters: {
        doubleCity(state: cityStateItem) {
            return state.city + ' ' + state.city
        }
    }
})

export default store
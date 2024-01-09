import { createStore } from 'vuex'
import state from './state.ts'
import mutations from './mutations'


// Create a new store instance.
const store = createStore({
    state,
    mutations,
    getters: {
        doubleCity(state) {
            return state.city + ' ' + state.city
        }
    })

export default store
interface cityStateItem {
    city: string
  }

export default {
    changeCity(state: cityStateItem, city: string) {
        state.city = city
        try {
            localStorage.city = city
        } catch (e) { console.log(e) }
    }
}

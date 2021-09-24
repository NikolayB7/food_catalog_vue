export const state = () => ({
  productList: {},
  nutrientsKcal: {},
  totalNutrients: [],
  healthLabels: [],
  dietLabels: []
})

export const mutations = {
  setProductList(state, productList) {
    state.productList = productList
  },
  setNutrientsKcal(state, nutrientsKcal) {
    state.nutrientsKcal = nutrientsKcal
  },
  setHealthLabels(state, healthLabels) {
    state.healthLabels = healthLabels
  },
  setDietLabels(state, dietLabels) {
    state.dietLabels = dietLabels
  },
}
export const actions = {
  async fetch({
                commit
              }, {product}) {
    await this.$axios.$get(`${process.env.apiUrl}&ingr=${product}`)
      .then((response) => {
        commit('setNutrientsKcal', response.totalNutrientsKCal)
        commit('setHealthLabels', response.healthLabels)
        commit('setDietLabels', response.dietLabels)
      })
      .catch((error) => {
        console.log(error)
      })

  }
}
export const getters = {
  getNutrientsKcal: state => {
    return state.nutrientsKcal;
  },
  getHealthLabels: state => {
    return state.healthLabels;
  },
  getDietLabels: state => {
    return state.dietLabels;
  },
}

export const state = () => ({
  carte: [],
  pages: [],
  equipe: []
})

export const getters = {
  getCarte (state) {
    return state.carte
  },
  getPages (state) {
    return state.pages
  },
  getEquipe (state) {
    return state.equipe
  }
}

export const mutations = {
  SET_CARTE (state, carte) {
    state.carte = carte
  },
  SET_PAGES (state, pages) {
    state.pages = pages
  },
  SET_EQUIPE (state, equipe) {
    state.equipe = equipe
  }
}

// permet de faire les requetes vers la bdd (SANITY) en selectionnant le nom (_type) et les champs demandés (exp: name,titre...)
export const actions = {
  async nuxtServerInit ({ dispatch }, { $axios }) {
    const carte = await $axios.$get('https://o4i5f3q7.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "carte"]{name,"imageId":image{asset,alt}}')

    const pages = await $axios.$get('https://o4i5f3q7.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "Pages"]{name,"imageId":image{asset,alt},titre,text}')

    const equipe = await $axios.$get('https://o4i5f3q7.api.sanity.io/v2021-03-25/data/query/production?query=*[_type == "equipe"]{name,"imageId":image{asset,alt},role}')

    await dispatch('setCarte', carte.result)
    await dispatch('setPages', pages.result)
    await dispatch('setEquipe', equipe.result)
  },
  setCarte ({ commit }, carte) {
    commit('SET_CARTE', carte)
  },
  setPages ({ commit }, pages) {
    commit('SET_PAGES', pages)
  },
  setEquipe ({ commit }, equipe) {
    commit('SET_EQUIPE', equipe)
  }
}

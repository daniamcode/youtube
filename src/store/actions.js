export default {
  addVideo: ({ commit }, payload) => {
    commit('appendVideo', payload)
  },
  removeVideo: ({ commit }, payload) => {
    commit('extractVideo', payload)
  }
}

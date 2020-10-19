export default {
  appendVideo: (state, { subject, video }) => {
    state[subject].push(video)
  },
  extractVideo: (state, { subject, id }) => {
    const index = state[subject].findIndex(video => video.id === id)
    state[subject].splice(index, 1)
  }
}

export default {
  appendVideo: (state, { subject, video }) => {
    state[subject].push(video)
  }
}

export default {
  videoCount: (state) => {
    return state.chess.length + state.nba.length
  }
}

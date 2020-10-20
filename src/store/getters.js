export default {
  videoCount: (state) => {
    return state.chess.length + state.nba.length
  },
  videoChessCount: (state) => {
    return state.chess.length
  },
  videoNbaCount: (state) => {
    return state.nba.length
  }
}

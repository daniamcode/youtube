export default {
  videoCount: (state) => {
    return state.barça.length + state.chess.length + state.nba.length
  },
  videoBarçaCount: (state) => {
    return state.barça.length
  },
  videoChessCount: (state) => {
    return state.chess.length
  },
  videoNbaCount: (state) => {
    return state.nba.length
  }
}

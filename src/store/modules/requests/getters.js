export default {
  requests(state, _0, _1, rootGetters) {
    const coachId = rootGetters.userId
    return state.requests.filter(req => req.coachId === coachId)
  },
  hasRequests(_0, getters) {
    return getters.requests && getters.requests.length > 0
  }
}
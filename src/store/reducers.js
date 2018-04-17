const reducer = (state = { users: [], user: {} }, action) => {
  switch (action.type) {
    case 'GOT_USERS':
      return Object.assign({}, state, { users: action.payload })
    case 'GOT_USER':
      return Object.assign({}, state, { user: action.payload })
    default:
      return state
  }
}

export default reducer

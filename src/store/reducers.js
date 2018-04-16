const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'DEMO_ACTION':
      return { message: action.payload }
    default:
      return state
  }
}

export default reducer

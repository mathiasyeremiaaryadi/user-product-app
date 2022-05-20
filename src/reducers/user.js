const { GET_USERS, GET_USER, CREATE_USER, DELETE_USER } = require('src/actions/actionTypes')

const initialState = {}

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return payload
    case GET_USER:
      return payload
    case CREATE_USER:
      return payload
    case DELETE_USER:
      return payload
    default:
      return state
  }
}

export default user

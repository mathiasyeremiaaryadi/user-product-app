const { GET_USERS, GET_USER, CREATE_USER, DELETE_USER } = require('src/actions/actionTypes')

const initialState = {
  code: 0,
  data: false,
  message: '',
}

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        code: payload.code,
        data: payload.data,
        message: payload.message,
      }
    case GET_USER:
      return {
        ...state,
        code: payload.code,
        data: payload.data,
        message: payload.message,
      }
    case CREATE_USER:
      return {
        ...state,
        code: payload.code,
        data: payload.data,
        message: payload.message,
      }
    case DELETE_USER:
      return {
        ...state,
        code: payload.code,
        data: payload.data,
        message: payload.message,
      }
    default:
      return state
  }
}

export default user

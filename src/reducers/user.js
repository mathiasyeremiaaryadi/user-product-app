import { GET_USERS, GET_USER, CREATE_USER, DELETE_USER, LOGIN_USER } from '../actions/actionTypes'

const initialState = {
  code: 0,
  users: [],
  user: {},
  message: '',
}

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        code: payload.code,
        message: payload.message,
      }
    case GET_USERS:
      return {
        ...state,
        code: payload.code,
        users: payload.data,
        message: payload.message,
      }
    case GET_USER:
      return {
        ...state,
        code: payload.code,
        user: payload.data,
        message: payload.message,
      }
    case CREATE_USER:
      return {
        ...state,
        code: payload.code,
        message: payload.message,
      }
    case DELETE_USER:
      return {
        ...state,
        code: payload.code,
        message: payload.message,
      }
    default:
      return state
  }
}

export default user

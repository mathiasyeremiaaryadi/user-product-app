import { LOGIN_USER, LOGOUT_USER } from '../actions/actionTypes'

const initialState = {
  code: 0,
  authenticatedUser: null,
  message: '',
}

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        code: payload.code,
        authenticatedUser: payload.data,
        message: payload.message,
      }
    case LOGOUT_USER:
      return {
        ...state,
        code: 0,
        authenticatedUser: payload,
        message: '',
      }
    default:
      return state
  }
}

export default auth

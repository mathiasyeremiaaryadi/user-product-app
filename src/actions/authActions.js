import AuthServices from 'src/services/AuthServices'
import { LOGIN_USER, LOGOUT_USER, PERSIST_LOGIN_USER } from './actionTypes'

export const loginUser = (data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      AuthServices.loginUser(data)
        .then((response) => {
          dispatch({
            type: LOGIN_USER,
            payload: response.data,
          })

          resolve(response.data)
        })
        .catch((error) => {
          dispatch({
            type: LOGIN_USER,
            payload: error.response.data,
          })

          reject(error.response.data)
        })
    })
  }
}

export const persistLoginUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: PERSIST_LOGIN_USER,
      payload: data,
    })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
      payload: null,
    })
  }
}

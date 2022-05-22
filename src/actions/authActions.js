import AuthServices from 'src/services/AuthServices'
import { LOGIN_USER, LOGOUT_USER } from './actionTypes'

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
          console.log('called')

          dispatch({
            type: LOGIN_USER,
            payload: error.response.data,
          })

          reject(error.response.data)
        })
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

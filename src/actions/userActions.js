import UserServices from 'src/services/UserService'
import {
  CREATE_USER,
  DELETE_USER,
  GET_USER,
  GET_USERS,
  LOGIN_USER,
  UPDATE_USER,
} from './actionTypes'

export const loginUser = (data) => {
  return (dispatch) => {
    UserServices.loginUser(data)
      .then((response) => {
        dispatch({
          type: LOGIN_USER,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_USER,
          payload: error.response.data,
        })
      })
  }
}

export const getUsers = () => {
  return (dispatch) => {
    UserServices.getUsers()
      .then((response) => {
        dispatch({
          type: GET_USERS,
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const getUser = (id) => {
  return (dispatch) => {
    UserServices.getUser(id)
      .then((response) => {
        dispatch({
          type: GET_USER,
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const createUser = (data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      UserServices.createUser(data)
        .then((response) => {
          dispatch({
            type: CREATE_USER,
            payload: response.data,
          })

          resolve(response.data)
        })
        .catch((error) => {
          dispatch({
            type: CREATE_USER,
            payload: error.response.data,
          })

          reject(error.response.data)
        })
    })
  }
}

export const updateUser = (id, data) => {
  return (dispatch) => {
    UserServices.updateUser(id, data)
      .then((response) => {
        dispatch({
          type: UPDATE_USER,
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const deleteUser = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      UserServices.deleteUser(id)
        .then((response) => {
          dispatch({
            type: DELETE_USER,
            payload: response.data,
          })

          resolve(response.data)
        })
        .catch((error) => {
          dispatch({
            type: DELETE_USER,
            payload: error.response.data,
          })

          reject(error.response.data)
        })
    })
  }
}

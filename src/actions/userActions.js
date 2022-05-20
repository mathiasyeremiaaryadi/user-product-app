import UserServices from 'src/services/UserService'
import { CREATE_USER, DELETE_USER, GET_USER, GET_USERS, UPDATE_USER } from './actionTypes'

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
    UserServices.createUser(data)
      .then((response) => {
        dispatch({
          type: CREATE_USER,
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
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
    UserServices.deleteUser(id)
      .then((response) => {
        dispatch({
          type: DELETE_USER,
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

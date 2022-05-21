import ProductServices from 'src/services/ProductService'
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
} from './actionTypes'

export const getProducts = () => {
  return (dispatch) => {
    ProductServices.getProducts()
      .then((response) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const getProduct = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      ProductServices.getProduct(id)
        .then((response) => {
          dispatch({
            type: GET_PRODUCT,
            payload: response.data,
          })

          resolve(response.data)
        })
        .catch((error) => {
          dispatch({
            type: GET_PRODUCT,
            payload: error.response.data,
          })

          reject(error.response.data)
        })
    })
  }
}

export const createProduct = (data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      ProductServices.createProduct(data)
        .then((response) => {
          dispatch({
            type: CREATE_PRODUCT,
            payload: response.data,
          })

          resolve(response.data)
        })
        .catch((error) => {
          dispatch({
            type: CREATE_PRODUCT,
            payload: error.response.data,
          })

          reject(error.response.data)
        })
    })
  }
}

export const updateProduct = (id, data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      ProductServices.updateProduct(id, data)
        .then((response) => {
          dispatch({
            type: UPDATE_PRODUCT,
            payload: response.data,
          })

          resolve(response.data)
        })
        .catch((error) => {
          dispatch({
            type: UPDATE_PRODUCT,
            payload: error.response.data,
          })

          reject(error.response.data)
        })
    })
  }
}

export const deleteProduct = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      ProductServices.deleteProduct(id)
        .then((response) => {
          dispatch({
            type: DELETE_PRODUCT,
            payload: response.data,
          })

          resolve(response.data)
        })
        .catch((error) => {
          dispatch({
            type: DELETE_PRODUCT,
            payload: error.response.data,
          })
          reject(error.response.data)
        })
    })
  }
}

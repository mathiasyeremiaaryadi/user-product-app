import { GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT } from '../actions/actionTypes'

const initialState = {
  code: 0,
  products: [],
  product: {},
  message: '',
}

const product = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        code: payload.code,
        products: payload.data,
        message: payload.message,
      }
    case GET_PRODUCT:
      return {
        ...state,
        code: payload.code,
        product: payload.data,
        message: payload.message,
      }
    case CREATE_PRODUCT:
      return {
        ...state,
        code: payload.code,
        message: payload.message,
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        code: payload.code,
        message: payload.message,
      }
    default:
      return state
  }
}

export default product

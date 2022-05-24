import http from '../http-common'
import setHeader from '../utils/AuthHeader'

const getProducts = () => {
  return http.get(`/products`, { headers: setHeader() })
}

const getProduct = (id) => {
  return http.get(`/products/${id}`, { headers: setHeader() })
}

const createProduct = (data) => {
  return http.post(`/products`, data, { headers: setHeader() })
}

const updateProduct = (id, data) => {
  return http.put(`/products/${id}`, data, { headers: setHeader() })
}

const deleteProduct = (id) => {
  return http.delete(`/products/${id}`, { headers: setHeader() })
}

const ProductServices = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
}

export default ProductServices

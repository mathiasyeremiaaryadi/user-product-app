import http from '../http-common'

const getProducts = () => {
  return http.get(`/products`)
}

const getProduct = (id) => {
  return http.get(`/products/${id}`)
}

const createProduct = (data) => {
  return http.post(`/products`, data)
}

const updateProduct = (id, data) => {
  return http.put(`/products/${id}`, data)
}

const deleteProduct = (id) => {
  return http.delete(`/products/${id}`)
}

const ProductServices = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
}

export default ProductServices

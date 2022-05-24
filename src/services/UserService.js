import http from '../http-common'
import setHeader from '../utils/AuthHeader'

const getUsers = () => {
  return http.get(`/users`, { headers: setHeader() })
}

const getUser = (id) => {
  return http.get(`/users/${id}`, { headers: setHeader() })
}

const createUser = (data) => {
  return http.post(`/users`, data, { headers: setHeader() })
}

const updateUser = (id, data) => {
  return http.put(`/users/${id}`, data, { headers: setHeader() })
}

const deleteUser = (id) => {
  return http.delete(`/users/${id}`, { headers: setHeader() })
}

const UserServices = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}

export default UserServices

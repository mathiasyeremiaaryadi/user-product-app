import http from '../http-common'

const loginUser = (data) => {
  return http.post(`/login`, data)
}

const getUsers = () => {
  return http.get(`/users`)
}

const getUser = (id) => {
  return http.get(`/users/${id}`)
}

const createUser = (data) => {
  return http.post(`/users`, data)
}

const updateUser = (id, data) => {
  return http.put(`/users/${id}`, data)
}

const deleteUser = (id) => {
  return http.delete(`/users/${id}`)
}

const UserServices = {
  loginUser,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}

export default UserServices

import { combineReducers } from 'redux'
import sidebar from './sidebar'
import user from './user'
import product from './product'
import auth from './auth'

export default combineReducers({
  auth,
  sidebar,
  user,
  product,
})

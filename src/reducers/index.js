import { combineReducers } from 'redux'
import sidebar from './sidebar'
import user from './user'
import product from './product'

export default combineReducers({
  sidebar,
  user,
  product,
})

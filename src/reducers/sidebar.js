import {
  SET_SIDEBAR_FOLDABLE,
  SET_SIDEBAR_STATUS,
  SET_SIDEBAR_VISIBILITY,
} from 'src/actions/actionTypes'

const initialState = { sidebarShow: true, sidebarVisible: true, sidebarUnfoldable: null }

const sidebar = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIDEBAR_STATUS:
      return { ...state, sidebarShow: payload }
    case SET_SIDEBAR_VISIBILITY:
      return { ...state, sidebarVisible: payload }
    case SET_SIDEBAR_FOLDABLE:
      return { ...state, sidebarUnfoldable: payload }
    default:
      return state
  }
}

export default sidebar

import { SET_SIDEBAR_STATUS } from 'src/actions/actionTypes'

const initialState = { sidebarShow: true }

const sidebar = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIDEBAR_STATUS:
      return { ...state, sidebarShow: !payload }
    default:
      return state
  }
}

export default sidebar

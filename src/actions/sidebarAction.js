import { SET_SIDEBAR_STATUS } from './actionTypes'

export const changeState = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_SIDEBAR_STATUS,
      payload: data,
    })
  }
}

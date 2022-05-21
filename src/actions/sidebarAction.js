import { SET_SIDEBAR_FOLDABLE, SET_SIDEBAR_STATUS, SET_SIDEBAR_VISIBILITY } from './actionTypes'

export const changeState = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_SIDEBAR_STATUS,
      payload: data,
    })
  }
}

export const changeVisible = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_SIDEBAR_VISIBILITY,
      payload: data,
    })
  }
}

export const changeFoldable = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_SIDEBAR_FOLDABLE,
      payload: data,
    })
  }
}

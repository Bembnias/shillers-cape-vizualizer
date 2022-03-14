import {
  GET_ALL_CAPES,
  SET_LOADING
} from '../types'

const CapeReducer = (state, action) => {
  switch(action.type) {
    case GET_ALL_CAPES:
      return {
        ...state,
        capes: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default CapeReducer

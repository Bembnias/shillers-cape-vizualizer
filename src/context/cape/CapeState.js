import React, { useReducer } from 'react'
import axios from 'axios'
import CapeContext from './CapeContext'
import CapeReducer from './CapeReducer'
import {
  GET_ALL_CAPES,
  SET_LOADING
} from '../types'

const CapeState = props => {
  const initialState = {
    capes: [],
    loading: false
  }

  const [state, dispatch] = useReducer(CapeReducer, initialState)

  // @DESC Get all CAPE indicators by month
  const getAllCapes = async () => {
    setLoading()
    let res = await axios.get('http://localhost:3000/cape')
    dispatch({
      type: GET_ALL_CAPES,
      payload: res.data
    })
  }

  // @DESC Set loading if true
  const setLoading = () => dispatch({ type: SET_LOADING })

  
  return <CapeContext.Provider
    value={{
      capes: state.capes,
      loading: state.loading,
      getAllCapes,
    }}
  >
    {props.children}
  </CapeContext.Provider>
}

export default CapeState
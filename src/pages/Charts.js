import React from 'react'
import LineChart from '../components/charts/LineChart'
import PropTypes from 'prop-types'

const Charts = ({ capes, loading }) => {
  
  if(loading) {
    return <div>Loading...</div>
  } else {
    return (
      <div style={{width: "50%", margin: "0 auto"}}>
        <LineChart capes={capes} title={'Poland'} loading={loading}/>
      </div>
    )
  }
}

Charts.propTypes = {
  capes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Charts
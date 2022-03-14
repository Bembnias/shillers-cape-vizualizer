import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types'

const LineChart = ({ capes, title, loading }) => {
  // Init chartjs component
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  if (loading) {
    return <div>Loading...</div>
  } else {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: title,
        },
      },
    };
    
    // Map through country's dates and remove years if cape value == 0
    let labels = []
    capes.forEach((cape)=>{
      if (cape.Poland>0) {
        labels.push(cape.Date)
      }
    })

    // Map through country's CAPE value != 0
    let filteredCape = []
    capes.forEach((cape)=>{
      if (cape.Poland>0) {
        filteredCape.push(cape.Poland)
      }
    })
    
    const data = {
      labels,
      datasets: [
        {
          label: "Shillers's CAPE (%)",
          data: filteredCape.map((cape)=>{return cape}),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
  
    return (
      <Line options={options} data={data} />
    )
  }
}

LineChart.propTypes = {
  capes: PropTypes.array.isRequired
}

export default LineChart
import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function PieChart(props) {

       
  return (
    <div style={{height:'270'}}>

    <HighchartsReact highcharts={Highcharts} options={props.data}/>
    </div>
  )
  }

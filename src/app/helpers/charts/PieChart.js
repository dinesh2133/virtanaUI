import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function PieChart(props) {
    console.log(props.data)
    const piechart_data=props.data;
    const title=props.title
       const options={ colors: ['#3d80cb','#923dbd','#6aa41e' ,'#889acc'],
        chart: {
          type: 'pie'
        },
        title: {
          text: {title}
        },
        tooltip: {
          valueSuffix: '%'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '{point.name}: {y} %'
            },
          }
        },
        series: [{
          name: 'Percentage',
          colorByPoint: true,
          innerSize: '60%',
          data:props.data
          
        }]    
}
  return (
    <div style={{height:'400',width:'400'}}>

    <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>
  )
  }

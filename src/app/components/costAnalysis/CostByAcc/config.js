import { color } from 'highcharts';
import {CurrentMonth} from '../../../helpers/utils/methods'
export const cofigpi=(data)=>{
    console.log(data)
    const options={ colors: ['#3d80cb','#923dbd','#6aa41e' ,'#889acc'],
        chart: {
          type: 'pie',
          height:255,
          backgroundColor:'#343333'
        },
        title: {
          text:`Cost by Business Unit-${CurrentMonth()}`,
          style:{color:'white'}
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
            data: data.costbyaccdata
              
          }]


}
return options;
}

 
 

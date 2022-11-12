import {CurrentMonth} from '../../../helpers/utils/methods'
export const cofigpi=(data,color)=>{
    const options={ colors: ['#3d80cb','#923dbd','#6aa41e' ,'#889acc'],
        chart: {
          type: 'pie',
          height:255,
          backgroundColor:'#343333',
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
            borderColor: '#000000' ,
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
            data: data
              
          }]


}
if(color)
options.colors=color
return options;
}

 
 

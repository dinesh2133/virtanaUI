
export const pichartdata =()=>{
     const options={ colors: ['#3d80cb','#923dbd','#6aa41e' ,'#889acc'],
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Cost by Business Units-'
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
}
return options
}
 
 

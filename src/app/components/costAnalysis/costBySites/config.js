import { grid } from "@mui/system";
import { CurrentMonth } from "../../../helpers/utils/methods";

export const dataForBarChart = (data) =>{
let barData = data;

let DataLabels = [];
DataLabels = barData?.datalabels?.map((e)=>{
  return e.value;
})

const option = {
    chart: {
        backgroundColor: '#353536',
        color: 'white',
        height: 255,
        type: "column",
        // margin: [ 50, 50, 100, 80]
    },
    
    plotOptions: {
        column: {
            colorByPoint: true
        }
    },
    colors: [
        "rgba(3, 138, 255, 0.5)",
        'rgba(3, 138, 255, 0.5)',
        'rgba(30, 139, 195,1)',
        'rgba(180,205,230, 0.5)',
        'rgba(180,205,230, 0.5)',
        'rgba(3, 138, 255, 0.5)',
        'rgba(30, 139, 255, 0.5)'
    ],
    title: {
        text: `Cost By Sites - ${CurrentMonth()}`,
        style:{
            color: "white",
            fontSize: "14px"
        }
    },
    xAxis: {
        categories: DataLabels,
        labels: {
            rotation: -45,
            align: 'right',

            style: {
                fontSize: '10px',
                fontFamily: 'Verdana, sans-serif',
                width: "70px",
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            enabled: false,
        },
        gridLineDashStyle: 'shortdash',
    },
    legend: {
        enabled: false
    },

    series: []

    };
   

    if(barData?.dataSets){
    barData?.dataSets.map((e)=>{
    option?.series.push(
                {
                    size: 10,
                    data: e?.data?.map((element)=>{
                      return element.value
                    }),
                    name: e?.label,
                    borderWidth: 0,

                }
            );  
    });
}
return option;
}
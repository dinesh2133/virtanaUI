
import { borderColor } from '@mui/system';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import annotationPlugin from 'chartjs-plugin-annotation';


ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend,
annotationPlugin
);

var sun = new Image();
sun.src = 'https://i.imgur.com/yDYW1I7.png';

var cloud = new Image();
cloud.src = '../../../helpers/icons/cloud.png';




let averageCost = 900;
let commaSeperatedValue = parseInt(averageCost).toLocaleString();

// alert(commaSeperatedValue)


function customYaxisLabel(value, index){
    let temp = JSON.stringify(value);
    if(value >= 1000 && value < 10000){
        if(temp[1] != 0){
            return temp.slice(0,1) + "." + temp[1] + "k ";
        }
        return temp.slice(0,1) +"k ";
    }
    else if(value >= 10000 & value < 100000){
        if(temp[2] != 0){
            return temp.slice(0,2) + "." + temp[2] + "k ";
        }
        return temp.slice(0,2) +  "k "
    }
    else{
        return value;
    }
}


export const options = {
    responsive: true,
    maintainAspectRatio: false,
    // scaleFontColor: "white",
    scales: {
      x: {
        grid:{
            display: false,
            borderColor: 'white',
 
        },
        ticks:{
            color: "#FFFFFF"
        },
        stacked: true,
      },
      y: {
        grid:{
            // display: false,
            drawTicks: false,
            drawBorder: false,
            borderDash: [2, 5],

            // borderDashColor: "blue"
            color: "white"
        },
        ticks:{
            color: "#FFFFFF",
            callback: customYaxisLabel,    
        },
        stacked: true
      }
    },
    layout:{
        padding: 5
    },
    plugins:{

        annotation: {
            //used to plot hr line on the chart
            annotations: [{
              
              yMin: averageCost,
              yMax: averageCost,
              borderColor: 'white',
              text: "average cost",
              borderWidth: 1.5 }],
          },
        legend:{
            position: 'bottom',
            labels: {
                color: "white",
                usePointStyle: true,
            }
        },
        
        title: {
            display: true,
            text: ["Cost Trend", `Avg cost: $${commaSeperatedValue} / month`],
            margin: 12,
            font: {
                padding: 12,
                size: 12,
            },
            color: 'white',
        }
    }
    
    }


const customColor = (element) =>{
    // let color;
    if(element.index === 11){
        return "white";
    }
}

const customBorder = {
    bottom: 0,
    top: 0,
    left: 1,
    right: 1
}

export const data = {
        type: "bar",
        color: "white",
        labels : ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets : [
            {
                barThickness: 16,
                label: "On-Premise",
                data: [522,342,542,142,352,546,120,192,323,374,125,123],
                backgroundColor: "#5F9DF7",
                pointStyle: 'rect',
                borderWidth: element => element.index === 11 ? customBorder : 0,
                borderColor: customColor,
            },
            {
                label: "AWS",
                data: [600,202,520,102,120,228,462,132,132,262,442,112],
                backgroundColor: '#B4CDE6',
                barThickness: 16,
                borderWidth: element => element.index === 11 ? customBorder : 0,
                borderColor: customColor,
                // setLineDash: ([10, 10]),
                pointStyle: cloud
            },
            {
                barThickness: 16,
                label: "Azure",
                data: [352,348,520,127,320,544,132,112,332,434,152,192],
                backgroundColor: "#277BC0",
                borderWidth: element => element.index === 11 ? customBorder : 0,
                borderColor: customColor,
                pointStyle: sun
            },
            {
                barThickness: 16,
                data: [0,0,0,0,0,0,0,0,0,0,0,673],
                label: "Forecast for this month total",
                borderWidth: 1,
                borderColor: customColor,
                borderDash: [2.5],

                backgroundColor: 'transparent',
                pointStyle: 'rect',
            }
        ],
    }


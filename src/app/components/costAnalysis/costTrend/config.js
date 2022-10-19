
// import { borderColor } from '@mui/system';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';

// import annotationPlugin from 'chartjs-plugin-annotation';
// import { useState } from 'react';
// import {getCostTrendData} from "../../../apis/costAnalysis.api"


// ChartJS.register(
// CategoryScale,
// LinearScale,
// BarElement,
// Title,
// Tooltip,
// Legend,
// annotationPlugin
// );
// export const bd =()=>{
// getCostTrendData();
// let barData = localStorage.getItem("costTrendData");
// barData = JSON.parse(barData);

// const date = new Date();
// let month = date.getMonth();



// var aws = new Image();
// aws.width = 18;
// aws.height = 20;
// aws.src = 'https://i.imgur.com/QPCNtc0.png';

// var azure = new Image();
// azure.width = 18;
// azure.height = 20;
// azure.src = 'https://i.imgur.com/MgK6hti.png';


// let averageCost = 900;
// let commaSeperatedValue = parseInt(averageCost).toLocaleString();


// function customYaxisLabel(value, index){
//     let temp = JSON.stringify(value);
//     if(value >= 1000 && value < 10000){
//         if(temp[1] != 0){
//             return temp.slice(0,1) + "." + temp[1] + "k ";
//         }
//         return temp.slice(0,1) +"k ";
//     }
//     else if(value >= 10000 & value < 100000){
//         if(temp[2] != 0){
//             return temp.slice(0,2) + "." + temp[2] + "k ";
//         }
//         return temp.slice(0,2) +  "k "
//     }
//     else{
//         return value;
//     }
// }


// const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     // scaleFontColor: "white",
//     scales: {
//       x: {
//         grid:{
//             display: false,
//             borderColor: 'white',
 
//         },
//         ticks:{
//             color: "#FFFFFF"
//         },
//         stacked: true,
//       },
//       y: {
//         grid:{
//             // display: false,
//             drawTicks: false,
//             drawBorder: false,
//             borderDash: [2, 5],

//             // borderDashColor: "blue"
//             color: "white"
//         },
//         ticks:{
//             color: "#FFFFFF",
//             callback: customYaxisLabel,    
//         },
//         stacked: true
//       }
//     },
//     layout:{
//         padding: 5
//     },
//     plugins:{

//         annotation: {
//             //used to plot hr line on the chart
//             annotations: [{
              
//               yMin: averageCost,
//               yMax: averageCost,
//               borderColor: 'white',
//               text: "average cost",
//               borderWidth: 1.5 }],
//           },
//         legend:{
//             position: 'bottom',
//             labels: {
//                 color: "white",
//                 usePointStyle: true,
//             }
//         },
        
//         title: {
//             display: true,
//             text: ["Cost Trend", `Avg cost: $${commaSeperatedValue} / month`],
//             margin: 12,
//             font: {
//                 padding: 12,
//                 size: 12,
//             },
//             color: 'white',
//         }
//     }
    
// }


// const customColor = (element) =>{
    
//     if(element.index === month){
//         return "white";
//     }
// }

// const customBorder = {
//     bottom: 0,
//     top: 0,
//     left: 1,
//     right: 1
// }

// const forecasetBorder = {
//     bottom: 0,
//     top: 1,
//     left: 1,
//     right: 1
// }

// const customColors = {
//     aws: '#B4CDE6',
//     azure: '#277BC0',
//     forecasteL: 'transparent',
//     onPremise: '#5F9DF7'
// }

// const data = {
//         type: "bar",
//         color: "white",
//         labels : ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         datasets : [],
//     }


// barData?.dataSets.map((e)=>{
//     let pstyle;
//     if(e?.pointStyle !== 'rect'){
//         pstyle = e?.pointStyle === 'aws' ? aws : azure;
//     }
//     else{
//         pstyle= e?.pointStyle;
//     }
//     console.log('index', e, month);
//     data.datasets.push(
//         {
//             barThickness: 16,
//             data: e?.data,
//             label: e.label,
//             borderWidth: e?.monthlyForecast ? forecasetBorder : (element => element.index === month ? customBorder : 0),
//             borderColor: customColor,
//             backgroundColor: customColors[e?.name],
//             pointStyle: pstyle,
//         }
//     );
// })
// return {options, data};
// }
// import React from "react";

let barData = localStorage.getItem("costTrendData");
if(!barData){
    barData = localStorage.getItem('costTrendData');
    console.log('cost trend data is barData', barData);
}

barData = JSON.parse(barData);

export const option = {
    chart: {
    //   width: 200,
      height: 250,
      type: "column"
    },
    plotOptions: {
      series: {
        pointWidth: 20
      }
    },

    series: []
};

barData?.dataSets.map((e)=>{
    // console.log('map is called');
  option?.series.push(
            {
                size: 10,
                data: [10, 123 ,22],
                name: "e.label"
                // borderWidth: e?.monthlyForecast ? forecasetBorder : (element => element.index === month ? customBorder : 0),
                // borderColor: customColor,
                // backgroundColor: customColors[e?.name],
                // pointStyle: pstyle,
            }
        );
});

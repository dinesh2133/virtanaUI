import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);


export const options = {
    responsive: true,
    maintainAspectRatio: false,
    // scaleFontColor: "white",
    scales: {
      x: {
        grid:{
            display: false,
            borderColor: 'white'
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
            color: "#FFFFFF"
        },
        stacked: true
      }
    },
    layout:{
        padding: 10
    },
    plugins:{
        legend:{
            labels: {
                color: "white"
            }
        },
        
        title: {
            display: true,
            text: "Cost Trend",
            color: 'white',
            fontSize: '1.9rem'
        }
    }
    }

export const data = {
        type: "bar",
        color: "white",
        labels : ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets : [
            {
                label: "AWS",
                data: [12,22,42,12,12,22,42,12,12,22,42,12],
                backgroundColor: '#B4CDE6',
                barThickness: 16,
            },
            {
                barThickness: 16,
                label: "On-Premise",
                data: [32,34,12,12,32,34,12,12,32,34,12,12],
                backgroundColor: "#5F9DF7",
                
            },
            {
                barThickness: 16,
                label: "Azure",
                data: [32,34,12,12,32,34,12,12,32,34,12,12],
                backgroundColor: "#277BC0",
                
            }
        ],
    }


import React, { useState } from 'react';
import { getCostTrendData } from '../../../apis/costAnalysis.api';
import CostTrendBar from './costTrendBarChart';
import "./costTrend.css"

export default {
    title: 'Cost Trend Bar',
    component: CostTrendBar
}


const chartData = {
    averageCost: 1200,
    datalabels:[
        {
          "labels": "Jan"
        },
        {
          "labels": "Feb"
        },
        {
          "labels": "March"
        },
        {
          "labels": "April"
        },
        {
          "labels": "May"
        },
        {
          "labels": "June"
        },
        {
          "labels": "July"
        },
        {
          "labels": "Aug"
        },
        {
          "labels": "Sep"
        },
        {
          "labels": "Oct"
        },
        {
          "labels": "Nov"
        },
        {
          "labels": "Dec"
        }
      ],
      "dataSets": [
        {
          "name": "forecaste",
          "label": "Forecast for this month total",
          "data": [
            {
              "value": 0
            },
            {
              "value": 0
            },
            {
              "value": 0
            },
            {
              "value": 0
            },
            {
              "value": 0
            },
            {
              "value": 0
            },
            {
              "value": 0
            },
            {
              "value": 0
            },
            {
              "value": 0
            },
            {
              "value": 673
            },
            {
              "value": 0
            },
            {
              "value": 0
            }
          ],
          "monthlyForecast": true
        },
        {
          "name": "onPremise",
          "label": "On-Premise",
          "data": [
            {
              "value": 522
            },
            {
              "value": 342
            },
            {
              "value": 542
            },
            {
              "value": 142
            },
            {
              "value": 352
            },
            {
              "value": 546
            },
            {
              "value": 120
            },
            {
              "value": 192
            },
            {
              "value": 323
            },
            {
              "value": 374
            },
            {
              "value": 125
            },
            {
              "value": 123
            }
          ],
          "monthlyForecast": null
        },
        {
          "name": "aws",
          "label": "AWS",
          "data": [
            {
              "value": 600
            },
            {
              "value": 202
            },
            {
              "value": 520
            },
            {
              "value": 102
            },
            {
              "value": 120
            },
            {
              "value": 228
            },
            {
              "value": 462
            },
            {
              "value": 132
            },
            {
              "value": 132
            },
            {
              "value": 262
            },
            {
              "value": 442
            },
            {
              "value": 112
            }
          ],
          "monthlyForecast": null
        },
        {
          "name": "azure",
          "label": "Azure",
          "data": [
            {
              "value": 352
            },
            {
              "value": 348
            },
            {
              "value": 520
            },
            {
              "value": 127
            },
            {
              "value": 320
            },
            {
              "value": 544
            },
            {
              "value": 132
            },
            {
              "value": 112
            },
            {
              "value": 332
            },
            {
              "value": 434
            },
            {
              "value": 152
            },
            {
              "value": 192
            }
          ],
          "monthlyForecast": null
        }
      ],
}

const CostTrendBarChart = (args) => (<CostTrendBar {...args} style="customStyle"/>)

export const barChart = CostTrendBarChart.bind({});
barChart.args={
    data: chartData,
    customStyle: {
      customColors: {
        aws: '#B4CDE6',
        azure: '#277BC0',
        forecaste: 'transparent',
        onPremise: '#5F9DF7'
      },
      stacked: true
    }
    
}

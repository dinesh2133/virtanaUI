import React from "react";
import CostBySites from "./costBySites";

export default{
    title: "cost by sites",
    component: CostBySites
}

const costBySites = (args) => (<CostBySites {...args} style="customWidth"/>)




let data = [
    {
      "value": 400000
    },
    {
      "value": 320000
    },
    {
      "value": 200000
    },
    {
      "value": 130000
    },
    {
      "value": 130000
    },
    {
      "value": 100000
    },
    {
      "value": 50000
    }
  ]

let datalables = [
    {
        "value": "Azure West Europe"
      },
      {
        "value": "Azure Southeast Asia"
      },
      {
        "value": "San Jose DC"
      },
      {
        "value": "AWS us-west-2"
      },
      {
        "value": "AWS us-east-1"
      },
      {
        "value": "Azure Australia East"
      },
      {
        "value": "Chicago DR DC"
      }
]

let colors = [
    "rgba(3, 138, 255, 0.5)",
    'rgba(3, 138, 255, 0.5)',
    'rgba(30, 139, 195,1)',
    'rgba(180,205,230, 0.5)',
    'rgba(180,205,230, 0.5)',
    'rgba(3, 138, 255, 0.5)',
    'rgba(30, 139, 255, 0.5)'
];


export const costBySitesColumnChart = costBySites.bind({});
costBySitesColumnChart.args={
    data:{
        dataSets: [
            {data: data}
        ],
        datalabels: datalables
    },
    customStyle: {
        barColors: colors
    }
}
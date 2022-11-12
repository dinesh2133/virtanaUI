
import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import HighCharts, { color, setOptions } from "highcharts";
import { dataForBarChart } from './config.js';
import {getCostTrendData, GetData} from '../../../apis/costAnalysis.api';
import './costTrend.css';
import {gql, request} from "graphql-request";
import { Loader } from "../../../helpers/utils/loader.js";
import StackedBarChart from "../../../helpers/charts/barCharts/stackedBarChart/stackedBarChart.js";


const CostTrendBar = (props) =>{
    
  let options = dataForBarChart(props)
  return (
    <div className="bar-chart-component" id={props.style}>
      <StackedBarChart style={props.style} config={options}/>
    </div>
    
  )
}


export default CostTrendBar;

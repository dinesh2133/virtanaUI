
import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import HighCharts, { color, setOptions } from "highcharts";
import { dataForBarChart } from './config.js';
import {getCostTrendData, GetData} from '../../../apis/costAnalysis.api';
import './costTrend.css';
import {gql, request} from "graphql-request";
import { Loader } from "../../../helpers/utils/loader.js";
import StackedBarChart from "../../../helpers/charts/barCharts/stackedBarChart/stackedBarChart.js";

const costTrendData = gql`query CostTrend {
  barchartdata{
    dataSets {
      name
      label
      data{
        value
      }
      monthlyForecast
    }
    datalabels {
      labels
    }
    averageCost
  }
}`

const CostTrendBar = (props) =>{
    
  // const [options, setOptions]= useState({});
  // const [data, setData] = useState({});
  // if(Object.keys(options).length <= 0){
  //   GetData(costTrendData).then((response)=>{
  //     let temp = dataForBarChart(response?.barchartdata);
  //     console.log("temp", temp);
  //     setOptions(temp);
  //   })
  // }
  const {data, style} = props;
  let options = dataForBarChart(data)
  console.log("props", props);
  return (
    <div className="bar-chart-component" id={style}>
      <StackedBarChart style={style} config={options}/>
    </div>
    
  )
}


export default CostTrendBar;

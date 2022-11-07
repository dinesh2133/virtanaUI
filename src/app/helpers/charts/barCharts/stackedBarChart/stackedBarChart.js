
import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import HighCharts, { color, setOptions } from "highcharts";
// import { dataForBarChart } from './config.js';s
import {getCostTrendData, GetData} from '../../../../apis/costAnalysis.api';
// import './costTrend.css';
import {gql, request} from "graphql-request";
import { Loader } from "../../../utils/loader";

// const costTrendData = gql`query CostTrend {
//   barchartdata{
//     dataSets {
//       name
//       label
//       data{
//         value
//       }
//       monthlyForecast
//     }
//     datalabels {
//       labels
//     }
//     averageCost
//   }
// }`



const StackedBarChart = (props ) => {
  const {config} = props;
    
    
  // const [options, setOptions]= useState();
  // const [data, setData] = useState({});
  // if(Object.keys(data).length <= 0){
  //   GetData(barQuery).then((response)=>{
  //     setData(response);
  //   })
  // }

  // useEffect(()=>{
  //   console.log("data", data);
  //   let temp = dataForBarChart(data[innerObject]);
  //   setOptions(temp);
  //   console.log("temp", temp);
  // }, [data])
  
  
  return (
    
      config?.chart ? 
      (
        <div>  
          <HighchartsReact highcharts={HighCharts} options={config}  />
        </div>    
      ) : 
      (
        <Loader />
      )
  );
};

export default StackedBarChart;

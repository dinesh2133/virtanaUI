
import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import HighCharts, { color, setOptions } from "highcharts";
import { dataForBarChart } from './config.js';
import {getCostTrendData, GetData} from '../../../apis/costAnalysis.api';
import './costTrend.css';
import {gql, request} from "graphql-request";
import { Loader } from "../../../helpers/utils/loader.js";

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



const CostTrendBar = ({style} ) => {
  const [options, setOptions]= useState();
  const [data, setData] = useState({});
  if(Object.keys(data).length <= 0){
    GetData(costTrendData).then((response)=>{
      setData(response);
    })
  }

  useEffect(()=>{
    console.log("data", data);
    let temp = dataForBarChart(data?.barchartdata);
    setOptions(temp);
  }, [data])
  
  
  return (
    
      options?.chart ? 
      (
        <div className="bar-chart-component" id={style}>  
          <HighchartsReact highcharts={HighCharts} options={options}  />
        </div>    
      ) : 
      (
        <Loader />
      )
  );
};

export default CostTrendBar;

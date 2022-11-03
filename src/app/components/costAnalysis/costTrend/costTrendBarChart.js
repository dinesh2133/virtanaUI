
import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import HighCharts, { color, setOptions } from "highcharts";
import { dataForBarChart } from './config.js';
import {getCostTrendData} from '../../../apis/costAnalysis.api';
import './costTrend.css';
import { gql, useQuery } from "@apollo/client";

const costTrendData = gql`query CostTrend {
  barchartdata{
    dataSets {
      name
      label
      data{
        value
      }
    }
    datalabels {
      labels
    }
    averageCost
  }
}`



const CostTrendBar = ({style} ) => {
  const [options, setOptions]= useState();
  const {data , loading, error} = useQuery(costTrendData);
  let temp;
  // useEffect(()=>{
  //   setOptions(temp);
  //   console.log("temp pad", temp);
  // }, [temp])
  if(!options?.chart){
    if(loading){
      return <p>loading....</p>
    }
    if(error){
      console.log("error in gql");
      return
    }
    if(data){
      console.log("data is", data.barchartdata);
      temp = dataForBarChart(data.barchartdata);
      setOptions(temp);
      // console.log('bar data ', temp);
      
    }
  }
  
  
 

  return (
    <div className="bar-chart-component" id={style}>  
          <HighchartsReact highcharts={HighCharts} options={options}  />
    </div>
  );
};

export default CostTrendBar;

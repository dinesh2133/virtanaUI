
import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import HighCharts, { color } from "highcharts";
import { dataForBarChart } from './config.js';
import {getCostTrendData} from '../../../apis/costAnalysis.api';
import './costTrend.css';

const CostTrendBar = ({data}) => {
  const [options, setOptions]= useState();
  useEffect(()=>{
    let config = dataForBarChart(data);
    setOptions(config);
  }, [])
 

  return (
    <div className="bar-chart-component">  
          <HighchartsReact highcharts={HighCharts} options={options}  />
    </div>
  );
};

export default CostTrendBar;


import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import HighCharts, { color, setOptions } from "highcharts";
// import { dataForBarChart } from './unstackedConfig.js';
import {getCostTrendData, GetData} from '../../../../apis/costAnalysis.api';
// import './costTrend.css';
import {gql, request} from "graphql-request";
import { Loader } from "../../../utils/loader";




const UnstackedBarChart = (props ) => {
  const {config} = props;

  
  return (
    
      config?.chart ? 
      (
        <div >  
          <HighchartsReact highcharts={HighCharts} options={config}  />
        </div>    
      ) : 
      (
        <Loader />
      )
  );
};

export default UnstackedBarChart;

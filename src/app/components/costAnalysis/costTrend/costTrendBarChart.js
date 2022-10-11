import React from "react";
import BarChart from "../../../helpers/charts/barChart";
import {options, data} from './config';
import './costTrend.css'

const CostTrendBar = () =>{

    return(
        <div className="bar-chart-component">
            <BarChart options={options} data={data}  />
        </div>
        
    )
}

export default CostTrendBar;
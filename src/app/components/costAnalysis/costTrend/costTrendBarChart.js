import React, { useState, useEffect } from "react";
import BarChart from "../../../helpers/charts/barChart";
import { Loader } from "../../../helpers/utils/loader";
// import {options, data} from './config';
import { bd } from "./config";
import './costTrend.css'

const CostTrendBar = () =>{
    const[temp ,setTemp] = useState([]);
    let temp2 = bd();
    if(!temp?.dataSets){
        setInterval(() => {
            setTemp(localStorage.getItem('costTrendData'));
        }, 3000);
    }
    useEffect(()=>{

    }, [temp]);

    console.log("temp", temp);
    return(
        <div className="bar-chart-component">
              <BarChart options={temp2?.options} data={temp2?.data}  />
              
        </div>

        
    )
}

export default CostTrendBar;
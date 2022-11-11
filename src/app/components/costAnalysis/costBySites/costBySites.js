import React, {useState, useEffect} from "react";
// import StackedBarChart from "../../../helpers/charts/barCharts/stackedBarChart";
import {gql} from "graphql-request";
import UnstackedBarChart from "../../../helpers/charts/barCharts/unstackedBarChart/unstacketBarChart";
import "./costBySites.css";
import { dataForBarChart } from "./config";
import { GetData } from "../../../apis/costAnalysis.api";



const CostBySites = (props) =>{

    let options = dataForBarChart(props);

    console.log("test", options);

    return(
        <div className="cost-by-site-div" id={props.style} >
            <UnstackedBarChart config={options}/>
        </div>
    )
}

export default CostBySites;
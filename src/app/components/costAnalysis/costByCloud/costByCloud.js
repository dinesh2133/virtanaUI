import React, { useEffect, useState } from "react";
import { GetData } from "../../../apis/costAnalysis.api";
import SparkLineChart from "../../../helpers/charts/Tables/Sparklinecharts";
import { gql } from "graphql-request";

const sparklinedata = gql`
    query {
        costaccount{
            name
            cost
            grdata
            resourcecount
        }
    }`

const CostByCloud = () =>{

    const[value, setValue] = useState([]);
    if(value.length <= 0){
        GetData(sparklinedata).then((response)=>{
            setValue(response.costaccount);
        }).catch((err)=>{
            console.log(err);
        })
    }
    

    return (
        <div>
            {/* <h2>sdflkj</h2> */}
            <SparkLineChart data={value} />
        </div>
    )
}

export default CostByCloud;
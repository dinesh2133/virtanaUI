import React from "react";
import CostChanges from "../components/costAnalysis/costChangesDueToApp/costChangesByApp";
import CostTrendBar from "../components/costAnalysis/costTrend/costTrendBarChart";
import MonthlyCosts from "../components/costAnalysis/monthlyCost/monthlyCost";
import './constAnalysis.css'

const CostAnalysis = () =>{
   
    return (
        <div id="costAnalysisDiv" >
            <MonthlyCosts />
            <CostTrendBar />
            {/* <CostChanges /> */}
            {/* <div style={{width : '100%', backgroundColor: 'grey'}}>
                <h1>testing</h1>
            </div> */}
        </div>
    )
}

export default CostAnalysis;
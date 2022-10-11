import React from "react";
import CostChanges from "../components/costAnalysis/costChangesDueToApp/costChangesByApp";
import CostTrendBar from "../components/costAnalysis/costTrend/costTrendBarChart";
import Insights from "../components/costAnalysis/Insights/Insights";
import MonthlyCosts from "../components/costAnalysis/monthlyCost/monthlyCost";
import Optimization from "../components/costAnalysis/Optimization/Optimization";
import SavingOpportunities from "../components/costAnalysis/SavingOpportunities/SavingOpportunities";
import './constAnalysis.css'

const CostAnalysis = () =>{
   
    return (
        <div id="costAnalysisDiv">
        <div className="container-xxl">
            <div className="row">
                <div className="col-sm-3" style={{padding:'15px 0 0 10px'}}>
                    <MonthlyCosts />
                </div>
                <div className="col-sm-5" style={{padding: '0', paddingLeft: '5px'}}>
                    <CostTrendBar />
                </div>
                <div className="col-sm-4" style={{padding: '15px 10px 0 5px'}}>
                    
                    <SavingOpportunities />
                </div>
                <div className="col-sm-4 mt-1" style={{padding: '5px 5px 0 10px'}} >
                    <Optimization />
                </div>
                <div className="col-sm-4 mt-1" style={{padding: '5px 5px 0 0'}}  >
                    <Insights />
                </div>
                <div className="col-sm-4 mt-1" style={{padding: '5px 10px 0 0'}}  >
                    <CostChanges />
                </div>
            </div>
        </div>
        </div>
    )
}

export default CostAnalysis;
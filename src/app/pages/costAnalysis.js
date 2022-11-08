import React, {useEffect, useState} from "react";
import CostChanges from "../components/costAnalysis/costChangesDueToApp/costChangesByApp";
import CostTrendBar from "../components/costAnalysis/costTrend/costTrendBarChart";
import Insights from "../components/costAnalysis/Insights/Insights";
import MonthlyCosts from "../components/costAnalysis/monthlyCost/monthlyCost";
import Optimization from "../components/costAnalysis/Optimization/Optimization";
import Skeleton from '@mui/material/Skeleton';
import SavingOpportunities from "../components/costAnalysis/SavingOpportunities/SavingOpportunities";
import './constAnalysis.css';
import { getCostTrendData } from "../apis/costAnalysis.api";
import { Loader } from "../helpers/utils/loader";
import CostBySites from "../components/costAnalysis/costBySites/costBySites";
import Costbyacc from "../components/costAnalysis/CostByAcc/Costbyacc";
import CostByCloud from "../components/costAnalysis/costByCloud/costByCloud";

const CostAnalysis = () =>{
    return (
        <div id="costAnalysisDiv">
        {
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3" id="monthly-costs" >
                            <MonthlyCosts />
                        </div>
                        <div className="col-sm-5" id="cost-trend" >
                            <CostTrendBar />
                        </div>
                        <div className="col-sm-4" id="saving-opportunities">
                            
                            <SavingOpportunities />
                        </div>
                        <div className="col-sm-4 mt-1" id="optimization">
                            <Optimization />
                        </div>
                        <div className="col-sm-4 mt-1" id="insights" >
                            <Insights />
                        </div>
                        <div className="col-sm-4 mt-1" id="cost-changes" >
                            <CostChanges />
                        </div>
                        <div className="col-sm-4 mt-1" id="cost-by-acc">
                            <Costbyacc />
                        </div>
                        <div className="col-sm-4 mt-1" id="cost-by-site">
                            <CostBySites />
                        </div>
                        <div className="col-sm-4 mt-1" id="cost-by-site">
                            <CostByCloud />
                        </div>
                    </div>
                </div>
          
        }
        </div>
        
        
    )
}


export default CostAnalysis;
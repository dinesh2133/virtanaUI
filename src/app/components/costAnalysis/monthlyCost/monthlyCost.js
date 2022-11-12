import React from "react";
import './monthlyCost.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useState, useEffect} from 'react';
import {GetData, getMonthlyCost} from '../.../../../../apis/costAnalysis.api';
import { Loader } from "../../../helpers/utils/loader";
import {addComma, CurrentMonth} from "../../../helpers/utils/methods";
import { request, gql } from "graphql-request";
import ProgressBar from "../../../helpers/charts/ConstProgressBar";


const MonthlyCosts = (props) =>{

    const {data, progressbarstyle1, progressbarstyle2, style} = props;
    let CurrentMonthStyle = {
      defaultBarHeight: 20,
      marginTop : "10px",
      primaryColor: "white",
      barHeightForSmallScreen : 15
    }

    let LastMonthStyle = {
      defaultBarHeight: 15,
      marginTop : "10px",
      barColor: "lightgrey",
      primaryColor: "black",
      barHeightForSmallScreen : 10
    }
    if(progressbarstyle1){
      CurrentMonthStyle = progressbarstyle1;
      LastMonthStyle = progressbarstyle2;
    }
    
    return(
    <div className="monthly-cost" id={style}>
      {
        data ? 
        (
          <div>
            <p className="heading">{CurrentMonth()} Cost (Projected)</p>
            <p className="heading-number"><strong>${addComma(data?.monthlyCost)}</strong></p>
            <section id="inner-section">
            <p className="sub-heading">Month To Date</p>
                <section className="month-to-date-section">

                  <span className="cost-for-month"><strong>${addComma(data?.mtdCost)}</strong></span>
                  <span className="float-span" style={{color: data?.costStatus === 'up' ? 'red' : 'green'}}>{data?.costStatus === 'up' ? (<ArrowUpwardIcon  sx={{fontSize: '13px', height: '20px', paddingBottom:'5px'}} />) : (<ArrowDownwardIcon sx={{fontSize: '13px', height: '20px', paddingBottom:'5px'}}  />)}{data?.costPercentage}</span>
                </section>
                <ProgressBar mtdCostInPercentage={data?.mtdCostInPercentage} style={CurrentMonthStyle}/>
                <ProgressBar mtdCostInPercentage={data?.lastMonthCostInPercentage} style={LastMonthStyle} />
                <p className="footer-span" style={{color: 'lightgrey'}}>Last Month</p>
                <p className="footer-span margin-left"><strong>${addComma(data?.costForLastMonth)}</strong></p>

            </section>
          </div>
        ) :
        
          (
            <Loader />
        )
      }
            
            
        </div>
    )
}

export default MonthlyCosts;
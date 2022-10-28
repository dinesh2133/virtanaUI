import React from "react";
import './monthlyCost.css';
import { Box, LinearProgress, linearProgressClasses} from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useState, useEffect} from 'react';
import {getMonthlyCost} from '../.../../../../apis/costAnalysis.api';
import { Loader } from "../../../helpers/utils/loader";
import {addComma, CurrentMonth} from "../../../helpers/utils/methods";


const MonthlyCosts =(props) =>{
    const [monthlyData, setMonthlyData] = useState();

    useEffect(()=>{
      getMonthlyCost().then((response)=>{
        setMonthlyData(response);
      })
    },[])


    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 20,

        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          // borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));
    return(
    <div className="monthly-cost" id={props.style}>
      {
        monthlyData ? 
        (
          <>
            <p className="heading">{CurrentMonth()} Cost (Projected)</p>
            <p className="heading-number"><strong>${addComma(monthlyData?.monthlyCost)}</strong></p>
            <section id="inner-section">
                <p className="sub-heading">Month To Date</p>
                <span ><strong>${addComma(monthlyData?.mtdCost)}</strong></span>
                <span className="float-span" style={{color: monthlyData?.costStatus === 'up' ? 'red' : 'green'}}>{monthlyData?.costStatus === 'up' ? (<ArrowUpwardIcon  sx={{fontSize: '13px', height: '20px', paddingBottom:'5px'}} />) : (<ArrowDownwardIcon sx={{fontSize: '13px', height: '20px', paddingBottom:'5px'}}  />)}{monthlyData?.costPercentage}</span>

                <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress sx={{marginTop: '5px', height: 25}} variant="determinate" value={monthlyData?.mtdCostInPercentage} />
                <BorderLinearProgress sx={{
                  height: 15,
                  '& .MuiLinearProgress-bar':{
                    backgroundColor: '#D3D3D3'
                  }
                }} style={{marginTop: "10px", backgroundColor: 'black'}} variant="determinate" value={98} />
                </Box>
                <p className="footer-span" style={{color: 'lightgrey'}}>Last Month</p>
                <p className="footer-span margin-left"><strong>${addComma(monthlyData?.costForLastMonth)}</strong></p>
                {/* <input className="range-input" type="range" value={50} disabled/> */}
            </section>
          </>
        ) :
        
          (
            <Loader />
        )
      }
            
            
        </div>
    )
}

export default MonthlyCosts;
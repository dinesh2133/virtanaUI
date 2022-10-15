import React from "react";
import './monthlyCost.css';
import { Box, LinearProgress, linearProgressClasses, ModalManager} from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useState, useEffect} from 'react';
import {getMonthlyCost} from '../.../../../../apis/costAnalysis.api';
import CircularProgress from '@mui/material/CircularProgress';
import { Loader } from "../../../helpers/utils/loader";


const MonthlyCosts =() =>{
    const [monthlyData, setMonthlyData] = useState();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    let month = date.getMonth();
    month = months[month];
    useEffect(()=>{
      getMonthlyCost().then((response)=>{
        setMonthlyData(response);
      })
    },[])
    useEffect(()=>{
      console.log(monthlyData);
    }, [monthlyData])

    const addComma =(num) =>{ 
      let no = JSON.stringify(num).split(".");
      no[0]=no[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
      let result = no.join(".");
      return result;  
    }

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 20,
        // borderRadius: 0,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          // borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));
    return(
    <div className="monthly-cost">
      {
        monthlyData ? 
        (
          <>
            <p>{month} Cost (Projected)</p>
            <p className="heading-number"><strong>${addComma(monthlyData?.monthlyCost)}</strong></p>
            <section id="inner-section">
                <p>Month To Date</p>
                <span className="span-heading"><strong>${monthlyData?.mtdCost}</strong></span>
                <span className="span-heading float-span" style={{color: monthlyData?.costStatus === 'up' ? 'red' : 'green'}}>{monthlyData?.costStatus === 'up' ? (<ArrowUpwardIcon  sx={{fontSize: '13px', height: '20px', paddingBottom:'5px'}} />) : (<ArrowDownwardIcon sx={{fontSize: '13px', height: '20px', paddingBottom:'5px'}}  />)}{monthlyData?.costPercentage}</span>

                <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress sx={{marginTop: '5px'}} variant="determinate" value={monthlyData?.mtdCostInPercentage} />
                <BorderLinearProgress sx={{
                  '& .MuiLinearProgress-bar':{
                    backgroundColor: '#D3D3D3'
                  }
                }} style={{marginTop: "10px", backgroundColor: 'black'}} variant="determinate" value={98} />
                </Box>
                <p className="footer-span">Last Month</p>
                <p className="footer-span margin-left"><strong>${monthlyData?.costForLastMonth}</strong></p>
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
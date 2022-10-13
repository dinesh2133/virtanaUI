import React from "react";
import './monthlyCost.css';
import { Box, LinearProgress, linearProgressClasses} from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useState, useEffect} from 'react';
import {getMonthlyCost} from '../.../../../../apis/costAnalysis.api';

const MonthlyCosts =() =>{
    const [monthlyData, setMonthlyData] = useState();
    useEffect(()=>{
      const temp = getMonthlyCost();
      setMonthlyData(temp);
    },[])
    useEffect(()=>{
      console.log(monthlyData);
    }, [monthlyData])
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
            <p>December Cost (Projected)</p>
            <p className="heading-number"><strong>$34,545</strong></p>
            <section id="inner-section">
                <p>Month To Date</p>
                <span className="span-heading"><strong>$45,600</strong></span>
                <span className="span-heading float-span" style={{color: 'red'}}><ArrowUpwardIcon  sx={{fontSize: '13px', height: '20px', paddingBottom:'5px'}} />25%</span>

                <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress sx={{marginTop: '5px'}} variant="determinate" value={50} />
                <BorderLinearProgress sx={{
                  '& .MuiLinearProgress-bar':{
                    backgroundColor: '#D3D3D3'
                  }
                }} style={{marginTop: "10px", backgroundColor: 'black'}} variant="determinate" value={90} />
                </Box>
                <p className="footer-span">Last Month</p>
                <p className="footer-span margin-left"><strong>$53,899</strong></p>
                {/* <input className="range-input" type="range" value={50} disabled/> */}
            </section>
            
        </div>
    )
}

export default MonthlyCosts;
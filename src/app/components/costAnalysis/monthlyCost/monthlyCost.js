import React from "react";
import './monthlyCost.css';
import { Box, LinearProgress, linearProgressClasses} from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {useState, useEffect} from 'react';
import {GetData, getMonthlyCost} from '../.../../../../apis/costAnalysis.api';
import { Loader } from "../../../helpers/utils/loader";
import {addComma, CurrentMonth} from "../../../helpers/utils/methods";
import useMediaQuery from '@mui/material/useMediaQuery';
import { red } from "@mui/material/colors";
// import { gql, useQuery } from "@apollo/client";
import { request, gql } from "graphql-request";


export const Get_Monthly_Data = gql`
                        query MonthlyCosts {
                          monthlycost{
                          mtdCost
                          monthlyCost
                          mtdCostInPercentage
                          costForLastMonth
                          costStatus
                          costPercentage
                        }
                      }`

const MonthlyCosts = (props) =>{

    const [data, setData]= useState({});
    if(Object.keys(data).length <= 0 ){
      GetData(Get_Monthly_Data).then((response)=>{
        setData(response);
      })
    }
    // log
    useEffect(()=>{
      console.log("testing", data)
    }, [data])

    const CurrentMonthProgressBar = styled(LinearProgress)(({ theme }) => ({
        // height: 20,
        marginTop: '7px',
        [theme.breakpoints.up('sm')]: {
          height : 15
        },
        [theme.breakpoints.up('xs')]: {
          height : 15
        },
        [theme.breakpoints.up('md')]: {
          height : 23
        },
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
        },
        [`& .${linearProgressClasses.bar}`]: {
          // borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));

      const LastMonthProgressBar = styled(LinearProgress)(({ theme }) => ({
        // height: 20,
        marginTop: '7px',
        [theme.breakpoints.up('sm')]: {
          height : 10
        },
        [theme.breakpoints.up('xs')]: {
          height : 10
        },
        [theme.breakpoints.up('md')]: {
          height : 15
        },
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: 'black',
          borderWidht: "2px",
          borderColor: red
        },
        [`& .${linearProgressClasses.bar}`]: {
          // borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#D3D3D3' : '#D3D3D3',
        },
      }));


    return(
    <div className="monthly-cost" id={props.style}>
      {
        data?.monthlycost ? 
        (
          <>
            <p className="heading">{CurrentMonth()} Cost (Projected)</p>
            <p className="heading-number"><strong>${addComma(data?.monthlycost?.monthlyCost)}</strong></p>
            <section id="inner-section">
            <p className="sub-heading">Month To Date</p>
                <section className="month-to-date-section">

                  <span className="cost-for-month"><strong>${addComma(data?.monthlycost?.mtdCost)}</strong></span>
                  <span className="float-span" style={{color: data?.monthlycost?.costStatus === 'up' ? 'red' : 'green'}}>{data?.monthlycost?.costStatus === 'up' ? (<ArrowUpwardIcon  sx={{fontSize: '13px', height: '20px', paddingBottom:'5px'}} />) : (<ArrowDownwardIcon sx={{fontSize: '13px', height: '20px', paddingBottom:'5px'}}  />)}{data?.monthlycost?.costPercentage}</span>
                </section>
                
                <Box sx={{ flexGrow: 1 }}>
                <CurrentMonthProgressBar className="current-month-progress-bar" sx={{marginTop: '5px'}} variant="determinate" value={data?.monthlycost?.mtdCostInPercentage} />
                <LastMonthProgressBar  variant="determinate" value={data?.monthlyCost?.lastMonthCostPercent  || 90 } />
                </Box>
                <p className="footer-span" style={{color: 'lightgrey'}}>Last Month</p>
                <p className="footer-span margin-left"><strong>${addComma(data?.monthlycost?.costForLastMonth)}</strong></p>

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
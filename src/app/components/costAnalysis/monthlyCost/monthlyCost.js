import React from "react";
import './monthlyCost.css';
import { Box, LinearProgress, linearProgressClasses} from "@mui/material";
import { styled } from '@mui/material/styles';


const MonthlyCosts = () =>{


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
            <h6>December Cost (Projected)</h6>
            <h3>$34,545</h3>
            <section id="inner-section">
                <p>Month To Date</p>
                <span className="span-heading"><strong>$45,600</strong></span>
                <span className="span-heading float-span">25%</span>

                <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress variant="determinate" value={50} />
                <BorderLinearProgress backgroundColor="red" sx={{
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
import React from "react";
import { Box, LinearProgress, linearProgressClasses} from "@mui/material";
import { styled } from '@mui/material/styles';


const ProgressBar = (props)=>{
    const {style, mtdCostInPercentage} = props;
    const ConstProgressBar = styled(LinearProgress)(({ theme }) => ({
        // height: 20,
        marginTop: style?.marginTop,
        [theme.breakpoints.up('sm')]: {
          height : style?.barHeightForSmallScreen
        },
        [theme.breakpoints.up('xs')]: {
          height : style?.barHeightForSmallScreen
        },
        [theme.breakpoints.up('md')]: {
          height : style?.defaultBarHeight
        },
        [`&.${linearProgressClasses.colorPrimary}`]: {
            borderWidth: "20px",
            backgroundColor: theme.palette.mode === 'light' ? style?.primaryColor : 800
        },
        [`& .${linearProgressClasses.bar}`]: {
          // borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? style?.barColor : "#308fe8",
        },
        // [`& .${linearProgressClasses.MuiLinearProgress-dashed}`] : {
        //   color: 'red'
        // }
      }));
    return(
        <Box sx={{ flexGrow: 1 }}>
            <ConstProgressBar className="current-month-progress-bar" sx={{
              // borderTop: .1,
              color: "red"
            }} variant="determinate" value={mtdCostInPercentage} />
        </Box>
    )
}

export default ProgressBar;
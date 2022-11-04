import React from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export const Loader = (props) =>{
    const {top,left, textAlign} = props;
    return (
        // <div className="loader" >
          <Box sx={{top: {top} ,left:{left} ,textAlign: {textAlign}}} className="loader" >
          <CircularProgress />
          {/* <h3>Loading....</h3> */}
        </Box>
        // </div>
        
    )
}
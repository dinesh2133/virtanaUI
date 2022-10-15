import React from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export const Loader = () =>{
    return (
        <Box sx={{ display: 'flex' }} className="loader" >
          <CircularProgress />
        </Box>
    )
}
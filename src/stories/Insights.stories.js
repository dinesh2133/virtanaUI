import Insights from "../app/components/costAnalysis/Insights/Insights";
import React, {useEffect}from "react";
import { getinsights } from '../app/apis/costAnalysis.api';
import { Table } from 'react-bootstrap-storybook';
<<<<<<< HEAD


 let apidata;

  
  getinsights().then((response)=>{
      //  setObj(response);
      apidata=response;
        console.log("Inside the story insights:",apidata);
    })

 
        

=======
import "../app/components/costAnalysis/Insights/InsightsStyle.css"
    
>>>>>>> main
export default {
  title: 'Insights',
  component: Insights,
};

export const newone = ()=> <Insights  style ="customWidth"/>

import Insights from "../app/components/costAnalysis/Insights/Insights";
import React, {useEffect}from "react";
import { getinsights } from '../app/apis/costAnalysis.api';
import { Table } from 'react-bootstrap-storybook';


 let apidata;

  
  getinsights().then((response)=>{
      //  setObj(response);
      apidata=response;
        console.log("Inside the story insights:",apidata);
    })

 
        

export default {
  title: 'Insights',
  component: Insights,
};
//  const Insights1 = (args)=> <Insights {...args} data={apidata}/>
// export const primorry = Insights1.bind({})
// primorry.args={
//   data:apidata}
export const newone = ()=> <Insights data={apidata}/>
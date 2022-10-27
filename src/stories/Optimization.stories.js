import Optimization from "../app/components/costAnalysis/Optimization/Optimization";
import React, { Component } from "react";
import {getoptimization }from "../App/apis/costAnalysis.api"


let apidata;

  
getoptimization().then((response)=>{
    //  setObj(response);
    apidata=response;
      console.log("Inside the story optimization:",apidata);
  })

export default{
    title:"Optimization",
    Component:Optimization
}

export const Optimization1 = () => <Optimization data={apidata}/>
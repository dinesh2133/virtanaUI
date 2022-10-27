import Insights from "../app/components/costAnalysis/Insights/Insights";
import React, {useEffect}from "react";
import { getinsights } from '../app/apis/costAnalysis.api';
import { Table } from 'react-bootstrap-storybook';
import "../app/components/costAnalysis/Insights/InsightsStyle.css"
    
export default {
  title: 'Insights',
  component: Insights,
};

export const newone = ()=> <Insights  style ="customWidth"/>

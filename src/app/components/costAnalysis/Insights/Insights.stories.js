import Insights from "./Insights";
import React, {useEffect}from "react";
import { getinsights } from '../../../apis/costAnalysis.api';
import { Table } from 'react-bootstrap-storybook';
import "./InsightsStyle.css"
    
export default {
  title: 'Insights',
  component: Insights,
};

export const newone = ()=> <Insights  style ="customWidth"/>

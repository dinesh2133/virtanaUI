import React from 'react';
import { getCostTrendData } from '../../../apis/costAnalysis.api';
import CostTrendBar from './costTrendBarChart';

export default {
    title: 'Cost Trend Bar',
    component: CostTrendBar
}

let data;
getCostTrendData().then(response =>{
    data = response;
    console.log("response in storybook is", data);
})

export const CostTrendBarChart = () => (<CostTrendBar data={data} />)
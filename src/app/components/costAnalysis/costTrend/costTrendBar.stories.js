import React from 'react';
import { getCostTrendData } from '../../../apis/costAnalysis.api';
import CostTrendBar from './costTrendBarChart';
import "./costTrend.css"

export default {
    title: 'Cost Trend Bar',
    component: CostTrendBar
}

export const CostTrendBarChart = () => (<CostTrendBar style="customStyle"/>)
import React from 'react';
import MonthlyCosts, { Get_Monthly_Data } from './monthlyCost';
import "./monthlyCost.css"
// import DashboardPage, { DashboardPageQuery } from '.';
import ProgressBar from '../../../helpers/charts/ConstProgressBar';

export default {
    title: 'monthly cost',
    component: MonthlyCosts,
}

const CurrentMonthStyle = {
    defaultBarHeight: 20,
    marginTop : "10px",
    primaryColor: "white",
    barHeightForSmallScreen : 15
  }


export const newtow = () => (<MonthlyCosts style="customWidth"/>)

export const progressbar = () => <ProgressBar mtdCostInPercentage={90} style={CurrentMonthStyle}  />
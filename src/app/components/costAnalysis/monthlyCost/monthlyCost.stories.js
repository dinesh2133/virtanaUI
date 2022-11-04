import React from 'react';
import MonthlyCosts, { Get_Monthly_Data } from './monthlyCost';
import "./monthlyCost.css"
// import DashboardPage, { DashboardPageQuery } from '.';


export default {
    title: 'monthly cost',
    component: MonthlyCosts,
}

export const newtow = () => (<MonthlyCosts style="customWidth"/>)

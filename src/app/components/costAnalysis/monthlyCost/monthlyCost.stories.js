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


const Template2 = (args) => (<MonthlyCosts {...args} style="customWidth"/>)

const Template = args => (<ProgressBar  {...args}  />)


export const progressbar = Template.bind({});

progressbar.args={
  style: CurrentMonthStyle,
  mtdCostInPercentage: 90
}

export const monthlycost = Template2.bind({});
monthlycost.args={
  data: {
   
      monthlyCost : 344,
      mtdCost : 7676,
      mtdCostInPercentage : 90,
      lastMonthCostInPercentage: 100,
      costStatus: "up",
      costPercentage: "30%",
      costForLastMonth : 8989
    
  }
}
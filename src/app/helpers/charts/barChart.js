import React from 'react';
// import {options, data} from "./config";
import { Bar } from 'react-chartjs-2';

const  BarChart = (props) => {
    const {options, data} = props;
  return <Bar options={options} data={data}/>;
}

export default BarChart;
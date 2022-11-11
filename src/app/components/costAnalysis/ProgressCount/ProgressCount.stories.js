import React from 'react';
import { GetData } from '../../../apis/costAnalysis.api';
import ProgressCount from './ProgressCount';
import "./ProgressCount.css"

export default {
    title: 'ProgressCount',
    component: ProgressCount
}
let Text_color='green'
 
let data = {
    id: 1,
    value: 54099,
    saving: 32323,
    type: "In-Progress"
}
    //const Temp= args => (<ProgressCount {...args} />)
export const progressCount = Temp.bind({});

progressCount.args={
    Tcolor:Text_color,
    data:data,
}
// const Template = args => (<ProgressBar  {...args}  />)


// export const progressbar = Template.bind({});

// progressbar.args={
//   style: CurrentMonthStyle,
//   mtdCostInPercentage: 90
// }
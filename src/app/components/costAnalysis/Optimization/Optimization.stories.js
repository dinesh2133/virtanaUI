import React from "react";
import Optimization from "./Optimization";
import ProgressCount from "../ProgressCount./ProgressCount.js";
import "./OptimizationStyle.css"
import SavingH1 from "../SavingH1/SavingH1";

export default {
    title: 'Optimization',
    component: Optimization,
}
let Text_color="White";
let Backgroundcolor="#6a6a6a"
let data = 
    [{ id:1, type: 'Open', value: 2000, saving:12000 },
    { id:2, type: 'In-Progress', value: 100, saving: 25000 },
    { id:3, type: 'Resolved', value: 2000, saving: 1120000 }]

    let progressdata = {
        id: 1,
        value: 54099,
        saving: 32323,
        type: "In-Progress"
    }

const temp = args => (<Optimization Style ="customWidth" {...args}/> )

export const Optimizations = temp.bind({})

Optimizations.args={
    data:data,
    Text_color:Text_color,
    Background_Color:Backgroundcolor
}

const temp2 = args => (<ProgressCount {...args} />)

export const progressCount = temp2.bind({})

progressCount.args={
    data:progressdata,
}



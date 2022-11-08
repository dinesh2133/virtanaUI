import React from 'react';
import { GetData } from '../../../apis/costAnalysis.api';
import ProgressCount from './ProgressCount';
import "./ProgressCount.css"

export default {
    title: 'ProgressCount',
    component: ProgressCount
}

let data = {
    id: 1,
    value: 54099,
    saving: 32323,
    type: "In-Progress"
}

// export const ProgressComp = () => (<ProgressCount data={data} style="customBackground" />)
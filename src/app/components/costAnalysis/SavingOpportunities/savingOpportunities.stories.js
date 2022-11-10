import React from 'react';
import SavingOpportunities from './SavingOpportunities';
import "./SavingOpportunitiesStyle.css"
import SavingH1 from '../SavingH1/SavingH1';
export default {
    title: 'saving opportunities',
    component: SavingOpportunities
}
let savingopdata=[ { id: 1, name: "Idle cloud Resourses", amount:1000000, suggestions: 5 },
{ id: 2, name: " Cloud Resizing", amount:6000, suggestions: 1 },
{ id: 3, name: "Workload", amount: 80000, suggestions: 1 },
{ id: 4, name: "On-Premise", amount: 800, suggestions: 2 }
]
const Temp = args => (<SavingOpportunities style="customWidth" {...args}/>)

export const SavingOpp = Temp.bind({})

 SavingOpp.args ={
    data:savingopdata
 }
export const SavingNo = () => (<SavingH1 style="customBackground" saving={343999} title="monthly saving available"/>)
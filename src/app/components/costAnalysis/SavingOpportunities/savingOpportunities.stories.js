import React from 'react';
import SavingOpportunities from './SavingOpportunities';
import "./SavingOpportunitiesStyle.css"
import SavingH1 from '../SavingH1/SavingH1';
export default {
    title: 'saving opportunities',
    component: SavingOpportunities
}
let bgcolor="#3d3d3d00"
let savingopdata=[ { id: 1, name: "Idle cloud Resourses", amount:1000000, suggestions: 5 },
{ id: 2, name: " Cloud Resizing", amount:6000, suggestions: 1 },
{ id: 3, name: "Workload", amount: 80000, suggestions: 1 },
{ id: 4, name: "On-Premise", amount: 800, suggestions: 2 }
]
let Savingdata=343999
let textcolor="black"
let title ="monthly saving available"
const Temp = args => (<SavingOpportunities style="customWidth" {...args}/>)
const temp2 = args =>(<SavingH1 style="customBackground" {...args}/>)

export const SavingOpp = Temp.bind({})
export const Savingdatacomp = temp2.bind({})
 SavingOpp.args ={
    data:savingopdata,
}
Savingdatacomp.args={
     saving:Savingdata,
     title:title,
     color:bgcolor,
     textcolor:textcolor

 }

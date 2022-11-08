import React from 'react';
import SavingOpportunities from './SavingOpportunities';
import "./SavingOpportunitiesStyle.css"
import SavingH1 from '../SavingH1/SavingH1';
export default {
    title: 'saving opportunities',
    component: SavingOpportunities
}

export const SavingOpp = () => (<>
    <SavingOpportunities style="customWidth"/>
    <br />
    <SavingH1 style="customBackground" saving={343999} title="monthly saving available"/>
</>)
import React from 'react';
import SavingH1 from './SavingH1';
let saving=343999
let title="monthly saving available"

export default {
    title: 'SavingHeading',
    component: SavingH1
}



export const Saving_Count = () => (<SavingH1 style="customBackground" saving={saving} title={title}/>)    
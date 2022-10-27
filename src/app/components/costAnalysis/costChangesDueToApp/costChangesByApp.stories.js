import React from "react";
import CostChanges from "./costChangesByApp";
import "./cost.css"

export default{
    title: 'cost changes by app',
    comonent: CostChanges
}

export const CostChangingApp = () => <CostChanges style="customWidth"/>

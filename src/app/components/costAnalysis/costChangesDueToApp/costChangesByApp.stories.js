import React from "react";
import CostChanges from "./costChangesByApp";

export default{
    title: 'cost changes by app',
    comonent: CostChanges
}

export const CostChangingApp = (args) => <CostChanges  {...args} />

export const CustomWidth = CostChangingApp.bind({});
CustomWidth.args = {
//    primary: true,
//    label: 'Button',
    size: 'small'
};
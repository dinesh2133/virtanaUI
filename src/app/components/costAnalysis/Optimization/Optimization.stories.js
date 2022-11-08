import React from "react";
import Optimization from "./Optimization";
import ProgressCount from "../ProgressCount./ProgressCount.js";
import "./OptimizationStyle.css"
import SavingH1 from "../SavingH1/SavingH1";

export default {
    title: 'Optimization',
    component: Optimization,
}
let data = {
    id: 1,
    value: 54099,
    saving: 32323,
    type: "In-Progress"
}
export const Optimizations = () => ( 
    <>
        <Optimization Style ="customWidth"/> 
        <br />
        <div style={{display: "flex"}}>
            
        <ProgressCount data={data} style="customBackground" />
        {/* <br /> */}
        <SavingH1 style="customBackground" saving={586799} title="YDT savings identified" />

        </div>
    </>

)


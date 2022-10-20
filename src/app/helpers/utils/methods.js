import React from "react";

export const addComma =(num) =>{ 
    let no = JSON.stringify(num).split(".");
    no[0]=no[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
    let result = no.join(".");
    return result;  
}

export const CurrentMonth = () =>{
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    let month = date.getMonth();
    return month = months[month];
    // return month;
}
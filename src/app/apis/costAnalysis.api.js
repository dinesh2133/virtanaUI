import {get, post} from '../helpers/utils/apiMethods';

export const getCostTrendData = async() =>{
    // const response = await get('localhost:/3001/insights');
    let temp = [9, 7, 8];
    localStorage.setItem('costTrendData', temp);
}

export const getMonthlyCost = async () =>{
    // const response = await get('localhost:/3001/montlyCost');
    return 'response';
}

export const getTopTemCostChanges = async () =>{
    // const response = await get("localhost:/3001/topTenCostChanges");
    return 'response';
}
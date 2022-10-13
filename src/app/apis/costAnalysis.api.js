import { get,} from '../helpers/utils/apiMethods';

export const getCostTrendData = async () => {
    // const response = await get('localhost:/3001/insights');
    let temp = [9, 7, 8];
    localStorage.setItem('costTrendData', temp);
}

export const getMonthlyCost = async () => {
    // const response = await get('localhost:/3001/montlyCost');
    return 'response';
}

export const getTopTemCostChanges = async () => {
    //  const response = await get("http://localhost:30001/topTenCostChanges");

    return 'response';
}

export const getinsights = async () => {
    const response = await get("http://localhost:30001/insights");
    return response;
}
export const getoptimization = async () => {
    const response = await get("http://localhost:30001/optimization");
    return response;
}
export const getsavingopportunities = async () => {
    const response = await get("http://localhost:30001/savingopportunities");
    return response;
}
import { get,} from '../helpers/utils/apiMethods';

export const getCostTrendData = async () => {
    const response = await get('http://localhost:3001/costTrendData');
    // let temp = [9, 7, 8];
    localStorage.setItem('costTrendData', JSON.stringify(response));
}

export const getMonthlyCost = async () => {
    const response = await get('http://localhost:3001/montlyCost');
    // setTimeout(response, 3000);
    return response;

}

export const getTopTenCostChanges = async () => {
    const response = await get("http://localhost:3001/topTenCostChanges");
    return response;
}

export const getinsights = async () => {
    const response = await get("http://localhost:3001/insights");
    return response;
}
export const getoptimization = async () => {
    const response = await get("http://localhost:3001/optimization");
    return response;
}
export const getsavingopportunities = async () => {
    const response = await get("http://localhost:3001/savingopportunities");
    return response;
}
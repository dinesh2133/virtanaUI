import { get,} from '../helpers/utils/apiMethods';
import {request, gql} from "graphql-request"


export const GetData = async (query) =>{
    let temp;
    await request("http://localhost:5000/graphql", query).then((data)=>{    
        temp = data;
    }) 
    if(temp != undefined){
        console.log("not undefined");
        return temp;
    }
}

// export const getCostTrendData = async () => {
    
//     return response;
// }

// export const getMonthlyCost = async () => {
//     const response = await get('http://localhost:3001/montlyCost');
//     // setTimeout(response, 3000);
//     return response;

// }

// export const getTopTenCostChanges = async () => {
//     const response = await get("http://localhost:3001/topTenCostChanges");
//     return response;
// }

// export const getinsights = async () => {
//     const response = await get("http://localhost:3001/insights");
//     return response;
// }
// export const getoptimization = async () => {
//     const response = await get("http://localhost:3001/optimization");
//     return response;
// }
// export const getsavingopportunities = async () => {
//     const response = await get("http://localhost:3001/savingopportunities");
//     return response;
// }
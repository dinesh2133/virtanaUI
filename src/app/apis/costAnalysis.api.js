import { get,} from '../helpers/utils/apiMethods';
import {request, gql} from "graphql-request"


export const GetData = async (query) =>{
    let temp;
    await request("http://localhost:5000/graphql", query).then((data)=>{    
        temp = data;
    }) 
    if(temp != undefined){
        return temp;
    }
}

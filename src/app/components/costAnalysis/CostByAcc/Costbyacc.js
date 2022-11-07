import React from 'react'
import PieChart  from '../../../helpers/charts/PieChart'
import { getinsights,GetData } from '../../../apis/costAnalysis.api';
import {useState ,useEffect} from 'react'
import { request, gql } from 'graphql-request'

export default function Costbyacc() {
    const Get_costbyacc_Data = gql`
    query costbyacc{
        costbyaccdata{
            id
            name
            y
        }

    }`
    const [data, setData]= useState([]);
    
    if(Object.keys(data).length <= 0 ){
        GetData(Get_costbyacc_Data).then((response)=>{
          setData(response);
        })
      }
      console.log(data.costbyaccdata)
  return(<div>

<PieChart data={data?.costbyaccdata}/>
    </div>)  
}

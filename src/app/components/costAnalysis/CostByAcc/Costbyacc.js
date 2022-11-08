import React from 'react'
import PieChart  from '../../../helpers/charts/PieChart'
import { getinsights,GetData } from '../../../apis/costAnalysis.api';
import {useState ,useEffect} from 'react'
import { request, gql } from 'graphql-request'
import  {cofigpi} from './config'
import { PropaneSharp } from '@mui/icons-material';
export default function Costbyacc(props) {
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
          const temp= cofigpi(response)
            setData(temp)
        })
      }
      console.log(data.costbyaccdata)
  return(<div style={{height:'270'}} id={props.style}>

<PieChart data={data}/>
    </div>)  
}

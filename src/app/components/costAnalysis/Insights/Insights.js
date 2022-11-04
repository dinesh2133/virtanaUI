import React, { Component } from 'react'
import  './InsightsStyle.css'
import ErrorIcon from '@mui/icons-material/Error';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import { getinsights } from '../../../apis/costAnalysis.api';
import { Loader } from '../../../helpers/utils/loader';
import {useState ,useEffect} from 'react'
import { request, gql } from 'graphql-request'

const Get_Insights_Data = gql`
                        query Insigths {
                            insightData{
                                id
                                msg
                                type
                            }
                      }`
export default function Insights(props) {
    // const [obj, setObj] = useState([]);
    //     useEffect(()=>{
    //         getinsights().then((response)=>{
    //             setObj(response);
    //         })
    //     }, []);
    const [data, setData]= useState([]);
    request("http://localhost:5000/graphql", Get_Insights_Data).then((data)=> setData(data));
   
  return (
    <>
            <section id={props.style} className='insights'>
                
                {
                data?.insightData ?
                (
                    <>
                        
                            <div className='title'>
                                <span>Insights</span>
                            </div>
                            <div className='tablesection'>

                            <table className="table datatable">
                                <tbody>
                                {data?.insightData?.map((value)=>(
                                        <tr key={value.id}>
                                        <td id='msgicon'>{value.type==='In-progress'?<WarningRoundedIcon id='inprogress'/>:null}
                                            {value.type==='Open'?<ErrorIcon id='open'/>:null}
                                            {value.type==='suggestions'?<TungstenSharpIcon id='suggestions'/>:null}
                                        </td>
                                        <td id='msgdata'>{value.msg}</td>
                            
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>

    
                    </>
                ) : 
                (
                    <Loader />
                    )
                }
            
            </section>
                
            </>
  )
            }



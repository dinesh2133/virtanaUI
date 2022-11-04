import React, { Component,useEffect,useState} from 'react'
import  './SavingOpportunitiesStyle.css'
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import { getsavingopportunities } from '../../../apis/costAnalysis.api';
import { Loader } from '../../../helpers/utils/loader';
import { addComma } from '../../../helpers/utils/methods';
import { request, gql } from 'graphql-request'

const Get_SavingOpp_Data = gql`
                        query savingopportunities {
                            savingopportunitiesData{
                                id
                                name
                                amount
                                suggestions
                            }
                      }`


export default function Insights(props) {
    //  const [obj, setObj] = useState([]);
    //     useEffect(()=>{
    //         getsavingopportunities().then((response)=>{
    //             setObj(response);
    //         })
    //     }, []);
    const [data, setData]= useState([]);
    request("http://localhost:5000/graphql", Get_SavingOpp_Data).then((data)=> setData(data));
  return (
    <>
            <section className="SavingOpp" id={props.style}>
                <div>
                {
                data?.savingopportunitiesData ? 
                (
                    <>
                            <div>
                            <div className='savingtitle1'>
                                <p>Cost Saving Opportunities</p>
                            </div>
                            <div className='contentcenter savingdata'>
                                <TungstenSharpIcon id='savingicon' />
                                <div>
                                    <p id='totalamount'>$60,000</p> {/*add this in place of 60,0000 addComma()*/}
                                    <p className='savingtitle2'>monthly savings available</p>
                                </div>
                            </div>
                            <div id='savingchart'>
                                <table className="table" id='savingtable'>
                                    <tbody>
                                        {data?.savingopportunitiesData ?.map((value) => (
                                            <tr key={value.key}>
                                                <td className='titleline'>{value.name}</td>
                                                <td>${addComma(value.amount)}</td>
                                                <td><TungstenSharpIcon id='sugicon' /> {value.suggestions}</td>
                                                <td><button onClick={() => { console.log('called') }}>View</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                ) : 
                (
                    <Loader />
                    )
                }
                </div>
            
            </section>    
                
            </>
  )
}

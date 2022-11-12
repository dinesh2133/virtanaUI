import React, { Component, useEffect, useState } from 'react'
import './SavingOpportunitiesStyle.css'
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import { getsavingopportunities, GetData } from '../../../apis/costAnalysis.api';
import { Loader } from '../../../helpers/utils/loader';
import { addComma } from '../../../helpers/utils/methods';
import { request, gql } from 'graphql-request'
import SavingH1 from '../SavingH1/SavingH1';


// const Get_SavingOpp_Data = gql`
//                         query savingopportunities {
//                             savingopportunitiesData{
//                                 id
//                                 name
//                                 amount
//                                 suggestions
//                             }
//                       }`


export default function Insights(props) {
    //  const [obj, setObj] = useState([]);
    //     useEffect(()=>{
    //         getsavingopportunities().then((response)=>{
    //             setObj(response);
    //         })
    //     }, []);
    // const [data, setData] = useState([]);
    // if (Object.keys(data).length <= 0) {
    //     GetData(Get_SavingOpp_Data).then((response) => {
    //         setData(response);
    //     })
    // }
    let {data}=props;
    return (
        <>
            <section className="SavingOpp" id={props.style}>     
                    {
                        data ?
                            (
                                <>
                                    <div>
                                        <div className='savingtitle1'>
                                            <p>Cost Saving Opportunities</p>
                                         </div>
                                        <div className='contentcenter savingamount' >
                                            <SavingH1 saving={343999} title="monthly saving available" />
                                        </div>
                                            <div id='savingchart'>
                                             <table className="table" id='savingtable'>
                                                <tbody>
                                                    {data?.map((value) => (
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
            </section>
        </>
    )
}

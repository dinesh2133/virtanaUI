import React, { useState, useEffect } from "react";
import './cost.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { getTopTenCostChanges } from "../../../apis/costAnalysis.api";
import { Loader } from "../../../helpers/utils/loader";
import { addComma, CurrentMonth } from "../../../helpers/utils/methods";
import {gql, request} from "graphql-request";

const top10changes =  gql`query TopTenCostChanges{
    toptenconstchanges{
        text
        price
        constStatus
    }
}`

const CostChanges = (props) =>{
    const [data, setData]= useState([]);
    request("http://localhost:5000/graphql", top10changes).then((data)=> setData(data)).catch((err)=>{console.log("err")});
        return(
        <div className="cost-changes" id={props.style}>
            {
                data?.toptenconstchanges ? 
                (
                    <>
                        <p style={{paddingTop :'10px', fontSize: '13px'}}>Top 10 Cost Changes By Application - {CurrentMonth()}</p>
                        <button className="float-button">View All</button>
                        <section className="table-section">
                            <table className="cost-changing-table">
                                <tbody>
                                    {
                                        data?.toptenconstchanges?.map((row)=>(
                                            <tr className="table-row">
                                                <td className="text-td">{row?.text.length > 35 ? row.text.slice(0,35) + "....." : row.text}</td>
                                                <td style={{textAlign: 'right'}}>${addComma(row?.price)}</td>
                                                <td>{row?.costStatus === 'up' ? <ArrowUpwardIcon  style={{color: 'red'}} sx={{fontSize: '17px'}} /> : <ArrowDownwardIcon style={{color:'green'}} sx={{fontSize: '17px'}} />}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </section>        
                    </>
                ) : 
                (
                    <Loader />
                )
            }
            
        </div>
    )
}

export default CostChanges;
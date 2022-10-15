import React, { useState, useEffect } from "react";
import './cost.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { getTopTenCostChanges } from "../../../apis/costAnalysis.api";

const CostChanges = () =>{
        const [obj, setObj] = useState([]);
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = new Date();
        let month = date.getMonth();
        month = months[month];
        useEffect(()=>{
            getTopTenCostChanges().then((response)=>{
                setObj(response);
            })
        }, []);
        useEffect(()=>{
            console.log(obj);
        }, [obj])
        // const [tableData, setTableData] = useState(obj);
        return(
        <div className="cost-changes">
            <p style={{paddingTop :'10px'}}>Top 10 Cost Changes By Application - {month}</p>
            <button className="float-button">View All</button>
            <section className="table-section">
                <table className="cost-changing-table">
                    <tbody>
                        {
                            obj.map((row)=>(
                                <tr className="table-row">
                                    <td className="text-td">{row?.text.length > 35 ? row.text.slice(0,35) + "....." : row.text}</td>
                                    <td style={{textAlign: 'right'}}>${row?.price}</td>
                                    <td>{row?.costStatus === 'up' ? <ArrowUpwardIcon  style={{color: 'red'}} sx={{fontSize: '17px'}} /> : <ArrowDownwardIcon style={{color:'green'}} sx={{fontSize: '17px'}} />}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default CostChanges;
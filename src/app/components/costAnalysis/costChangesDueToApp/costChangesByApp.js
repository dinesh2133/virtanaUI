import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './cost.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { color } from "@mui/system";

const CostChanges = () =>{
        const obj = [
            {
                text: 'Truck Monitoring',
                price: '28,233',
                range: 'up',
                key: 0
            },
            {
                text: 'Cargo Ship Monitoring',
                price: '43,233',
                range: 'up',
                key: 1
            },
            {
                text: 'Logistics Operation',
                price: '33,233',
                range: 'down',
                key: 2
            },
            {
                text: 'Warehouse Backup',
                price: '15,233',
                range: 'down',
                key: 3
            },
            {
                text: 'HR Benefits Portal',
                price: '10,233',
                range: 'down',
                key: 4
            },
            {
                text: 'Truck Monitoring',
                price: '28,233',
                range: 'up',
                key: 0
            },
            {
                text: 'HR Benefits Portal',
                price: '10,233',
                range: 'down',
                key: 4
            },
            {
                text: 'Truck Monitoring',
                price: '28,233',
                range: 'up',
                key: 0
            }
        ]
        const [tableData, setTableData] = useState(obj);
        return(
        <div className="cost-changes">
            <h6 style={{paddingTop :'10px'}}>Top 10 Cost Changes By Application - December</h6>
            <button className="float-button">view all</button>

            <section className="table-section">
                <table className="cost-changing-table">
                    <tbody>
                        {
                            tableData.map((row)=>(
                                <tr className="table-row">
                                    <td>{row.text.length > 35 ? row.text.slice(0,35) + "....." : row.text}</td>
                                    <td>{row.price}</td>
                                    <td>{row.range === 'up' ? <ArrowUpwardIcon  style={{color: 'red'}} fontSize="small" /> : <ArrowDownwardIcon style={{color:'green'}} fontSize="small" />}</td>
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
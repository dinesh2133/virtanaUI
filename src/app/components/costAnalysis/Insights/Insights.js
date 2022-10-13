import React, { Component } from 'react'
import InsightsStyle from './InsightsStyle.css'
import ErrorIcon from '@mui/icons-material/Error';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';


export default class Insights extends Component {
    constructor() {
      super()
    
      this.state = {
         data:[{id:1, type:'In-progress',msg:"132 New E8C2 instances added costing $5459 per month of the last years"},
         {id:2, type:'Open',msg:"132 New EC2 instances added costing $5459 per month "},
         {id:3, type:'In-progress',msg:"132 New EC2 instances added costing $5459 per month of the last years"},
         {id:4, type:'suggestions',msg:"132 New EC2 instances added costing $5459 per month "},
         {id:5, type:'Open',msg:"132 New EC2 instances added costing $5459 per month "},
         {id:6, type:'In-progress',msg:"132 New EC2 instances added costing $5459 per "},
         {id:7, type:'Open',msg:"132 New EC2 instances added costing $5459 per month of the last years"},
         {id:8, type:'suggestions',msg:"132 New EC2 instances added costing $5459 per month of the last years"}],
      }
    }
    render() {
        
        return (
            <>
                <section className='insights'>
                    <div className='title'>
                        <span>Insights</span>
                    </div>
                    <div className='tablesection'>

                    <table className="table datatable">
                        <tbody>
                        {this.state.data.map((value)=>(
                                <tr key={value.id}>
                                <td id='msgicon'>{value.type==='In-progress'?<WarningRoundedIcon id='inprogress'/>:null}
                                     {value.type==='Open'?<ErrorIcon id='open'/>:null}
                                     {value.type==='suggestions'?<TungstenSharpIcon id='suggestions'/>:null}
                                </td>
                                <td id='msgdata'>{value.msg.length<=30 ? value.msg : `${value.msg}`}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>

                </section>
            </>
        )
    }
}

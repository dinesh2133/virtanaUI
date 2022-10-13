import React, { Component } from 'react'
import InsightsStyle from './InsightsStyle.css'
import ErrorIcon from '@mui/icons-material/Error';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';


export default class Insights extends Component {
    constructor() {
      super()
    
      this.state = {
        apidata:''
     }
 }
 async componentDidMount(){
     let url="";
     let data = await (await fetch(url)).json();
     this.setState([{apidata:data}])
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

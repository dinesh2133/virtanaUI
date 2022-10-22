import React, { Component } from 'react'
import  './InsightsStyle.css'
import ErrorIcon from '@mui/icons-material/Error';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import { getinsights } from '../../../apis/costAnalysis.api';
import { Loader } from '../../../helpers/utils/loader';

export default class Insights extends Component {
    constructor (props) {
      super(props)
    
      this.state = {
        // data:[{id:1, type:'In-progress',msg:"132 New E8C2 instances added costing $5459 per month of the last years"},
        //  {id:2, type:'Open',msg:"132 New EC2 instances added costing $5459 per month "},
        //  {id:3, type:'In-progress',msg:"132 New EC2 instances added costing $5459 per month of the last years"},
        //  {id:4, type:'suggestions',msg:"132 New EC2 instances added costing $5459 per month "},
        //  {id:5, type:'Open',msg:"132 New EC2 instances added costing $5459 per month "},
        //  {id:6, type:'In-progress',msg:"132 New EC2 instances added costing $5459 per "},
        //  {id:7, type:'Open',msg:"132 New EC2 instances added costing $5459 per month of the last years"},
        //  {id:8, type:'suggestions',msg:"132 New EC2 instances added costing $5459 per month of the last years"}],
         apidata:[]
    }
   // this.called()
    // let temp=getinsights()
    // console.log(temp);
    this.state.apidata=this.props.data
    console.log("inside main",this.props.data);
}
// async componentDidMount(){
//     let temp= await getinsights()
//     this.setState({apidata:temp})
//   //  console.log("apidata",this.state.apidata);
// }

render() {
    
   
    return (
        <>
            <section className='insights'>
            {
                this.state.apidata.length > 0 ?
                (
                    <>
                        
                            <div className='title'>
                                <span>Insights</span>
                            </div>
                            <div className='tablesection'>

                            <table className="table datatable">
                                <tbody>
                                {this.state.apidata?.map((value)=>(
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
}

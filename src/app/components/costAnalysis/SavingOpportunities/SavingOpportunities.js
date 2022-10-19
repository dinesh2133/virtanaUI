import React, { Component } from 'react'
import  './SavingOpportunitiesStyle.css'
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import { getsavingopportunities } from '../../../apis/costAnalysis.api';
export default class SavingOpportunities extends Component {
    constructor(props) {
        super(props)

        this.state = {
            apidata:[],
            result:null
        }
        this.add_comma = this.add_comma.bind(this);

    }
    async componentDidMount(){
            let data=await getsavingopportunities()
            this.setState({apidata:data})
         }
        add_comma(num){ 
            let no =num.toString().split(".");
            no[0]=no[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
            let result = no.join(".");
            return result;  
        }
    render() {
        
        return (
            <>
                <section className='SavingOpp'>
                    <div>
                    <div className='savingtitle1'>
                        <p>Cost Saving Opportunities</p>
                    </div>
                    <div className='contentcenter savingdata'>
                        <TungstenSharpIcon id='savingicon' />
                        <div>
                            <p id='totalamount'>$60,000</p> {/*add this in place of 60,0000 this.add_comma()*/}
                            <p className='savingtitle2'>monthly savings available</p>
                        </div>
                    </div>
                    <div id='savingchart'>
                        <table className="table" id='savingtable'>
                            <tbody>
                                {this.state.apidata?.map((value) => (
                                    <tr key={value.key}>
                                        <td className='titleline'>{value.name}</td>
                                        <td>${this.add_comma(value.amount)}</td>
                                         <td><TungstenSharpIcon id='sugicon' /> {value.suggestions}</td>
                                        <td><button>View</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                 </div>
                </section>
            </>
        )
    }
}

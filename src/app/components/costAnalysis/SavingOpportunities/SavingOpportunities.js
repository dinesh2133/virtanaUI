import React, { Component } from 'react'
import SavingOpportunitiesStyle from './SavingOpportunitiesStyle.css'
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';

export default class SavingOpportunities extends Component {
    constructor(props) {
        super(props)

        this.state = {
            apidata:''
        }
        
    }

    async componentDidMount(){
            let url="";
            let data = await fetch(url);
            let parseddata=await data.json()
            this.setState([{apidata:parseddata}])
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
                            <p className='totalamount'>$60,000</p>
                            <p className='savingtitle2'>monthly savings available</p>
                        </div>
                    </div>
                    <div id='savingchart'>
                        <table className="table" id='savingtable'>
                            <tbody>
                                {this.state.data.map((value) => (
                                    <tr key={value.key}>
                                        <td>{value.name}</td>
                                        <td>${value.amount}</td>
                                        <td><TungstenSharpIcon id='sugicon' /> {value.suggestions}</td>
                                        <td><button onClick={() => { console.log('called') }}>View</button></td>
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

import React, { Component } from 'react'
import SavingOpportunitiesStyle from './SavingOpportunitiesStyle.css'
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';

export default class SavingOpportunities extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [{ key: 1, name: "Idle cloud Resourses", amount: 8000, suggestions: 5 },
            { key: 2, name: " Cloud Resizing", amount: 6000, suggestions: 1 },
            { key: 3, name: "Workload", amount: 7300, suggestions: 1 },
            { key: 4, name: "On-Premise", amount: 800, suggestions: 2 }]
        }
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
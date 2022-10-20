import React, { Component } from 'react'
import  './SavingOpportunitiesStyle.css'
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import { getsavingopportunities } from '../../../apis/costAnalysis.api';
import { Loader } from '../../../helpers/utils/loader';
import { addComma } from '../../../helpers/utils/methods';
export default class SavingOpportunities extends Component {
    constructor(props) {
        super(props)

        this.state = {
            apidata:[],
            amountarr:[],

    //         data:[{ key: 1, name: "Idle cloud Resourses", amount: "8,000", suggestions: 5 },
    // { key: 2, name: " Cloud Resizing", amount:' 6,000', suggestions: 1 },
    // { key: 3, name: "Workload", amount: '7,300', suggestions: 1 },
    // { key: 4, name: "On-Premise", amount: 800, suggestions: 2 }]
        }


    }
    async componentDidMount(){
            let data=await getsavingopportunities()
            this.setState({apidata:data})
            this.state.apidata.map ((event)=>(this.state.amountarr.push(event.amount)))
            
               
        }
    render() {
        
        return (
            <>
            <section className='SavingOpp'>
            {
                this.state.apidata.length > 0 ? 
                (
                    <>
                            <div>
                            <div className='savingtitle1'>
                                <p>Cost Saving Opportunities</p>
                            </div>
                            <div className='contentcenter savingdata'>
                                <TungstenSharpIcon id='savingicon' />
                                <div>
                                    <p id='totalamount'>$60,000</p> {/*add this in place of 60,0000 addComma()*/}
                                    <p className='savingtitle2'>monthly savings available</p>
                                </div>
                            </div>
                            <div id='savingchart'>
                                <table className="table" id='savingtable'>
                                    <tbody>
                                        {this.state.apidata?.map((value) => (
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
}

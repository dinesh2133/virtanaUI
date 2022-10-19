import React, { Component } from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import  './OptimizationStyle.css'
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import { getoptimization } from '../../../apis/costAnalysis.api';
export default class Optimization extends Component {
    constructor(props) {
        super(props)

        this.state = {
           apidata:[],
        }
        this.add_comma = this.add_comma.bind(this);

    }
    async componentDidMount(){
       let data=await getoptimization()
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
                <section className='Optimization'>
                    <div className='Optimiz'>
                        <p className='Heading contentcenter'>Optimization Change Progress</p>
                        <div className='optimiztable'>
                        <span className='savingline'>Save</span>

                            <table className="table  table-borderless" id='tabledata'>
                                <thead>
                                    <tr >

                                        {this.state.apidata?.map((value) => (

                                            <td id='tabletitle' key={value.id}>{value.type}</td>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className='tablebody'>
                                    <tr>
                                        {this.state.apidata.map((value) => (

                                            <td id='actualdata' key={value.id}>
                                                {value.id===1 ?<ErrorIcon  id='warning'/>:null}
                                                {value.id===2 ?< WarningRoundedIcon id='error'/>:null }
                                                {value.id===3 ?<CheckCircleRoundedIcon id='check'/>:null}
                                                {value.value}</td>

                                        ))}
                                    </tr>
                                    <tr>
                                        {this.state.apidata.map((value) => (

                                            <td id='savingvalue' key={value.id}>${this.add_comma(value.saving)}</td>

                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='totalSaving contentcenter '>
                            <TungstenSharpIcon id='Saving' />
                            <span>$50,00,000</span> {/*add add_comma function in place of span value  */}
                        </div>
                        <div className='contentcenter footerline'>
                            <p>YDT savings identified</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
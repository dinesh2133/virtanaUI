import React, { Component } from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import OptimizationStyle from './OptimizationStyle.css'
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';

export default class Optimization extends Component {
    constructor(props) {
        super(props)

        this.state = {
            arr: [{ id:1, type: 'Open', value: 20, saving: '12,000' },
            { id:2, type: 'In-Progress', value: 10, saving: '25,000' },
            { id:3, type: 'Resolved', value: 200, saving: 112 }]
        }
    }
    render() {
        return (
            <>
                <section className='Optimization'>
                    <div className='Optimiz'>
                        <p className='Heading contentcenter'>Optimization Change Progress</p>
                        <div className='optimiztable'>
                        <span className='savingline'>Saving</span>

                            <table className="table tabledata table-borderless" id='tabledata'>
                                <thead>
                                    <tr >

                                        {this.state.arr.map((value) => (

                                            <td id='tabletitle' key={value.id}>{value.type}</td>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className='tablebody'>
                                    <tr>
                                        {this.state.arr.map((value) => (

                                            <td id='actualdata' key={value.id}>
                                                {value.id===1 ?<ErrorIcon  id='warning'/>:null}
                                                {value.id===2 ?< WarningRoundedIcon id='error'/>:null }
                                                {value.id===3 ?<CheckCircleRoundedIcon id='check'/>:null}
                                                {value.value}</td>

                                        ))}
                                    </tr>
                                    <tr>
                                        {this.state.arr.map((value) => (

                                            <td id='savingvalue' key={value.id}>${value.saving}</td>

                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='totalSaving contentcenter '>
                            <TungstenSharpIcon id='Saving' />
                            <span>$50,00,000</span>
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
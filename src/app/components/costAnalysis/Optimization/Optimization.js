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
            arr: [{ type: 'Open', value: 2000, saving: 12000 },
            { type: 'In-Progress', value: 1000, saving: 25000 },
            { type: 'Resolved', value: 200, saving: 112000 }]
        }
    }
    render() {
        return (
            <>
                <section className='Optimization'>
                        <p className='Heading contentcenter'>Optimization Change Progress</p>
                        <div className='Titles'>
                            <p>open</p>
                            <p>In-Progress</p>
                            <p>Resolved</p>
                        </div>
                        <div className='CountofProgress contentcenter' >
                            <div className='Opendiv contentcenter'>
                                <ErrorIcon className='Open_Progress' />
                                <span>900</span>
                            </div>
                            <div className='Inprogressdiv m40 contentcenter' id='Inprogressdiv'>
                                <WarningRoundedIcon className='In_Progress ' />
                                <span className=''>08000</span>
                            

                            </div>
                            <div className='Resolveddiv m40 contentcenter'>
                                <CheckCircleRoundedIcon className='Resolved' />
                                <span> 12</span>
                            </div>
                        </div>
                        <div className='SavingAmount contentcenter'>
                            <span className='m20 contentcenter'>Saving</span>
                            <span className='contentcenter'>$120000</span>
                            <span className='m65 contentcenter'>$3000</span>
                            <span className='m65 contentcenter'>$150000</span>

                        </div>
                        <div className='TotalSaving contentcenter '>
                            <TungstenSharpIcon id='Saving' />
                            <span>$50000000</span>
                        </div>
                        <div className='contentcenter footerline'>
                            <p>YDT savings identified</p>
                        </div>
                </section>
            </>
        )
    }
}

import React from 'react'
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import './SavingH1.css'

export default function SavingH1() {
  return (
    <>
    <div className='Savingdata'>
    <TungstenSharpIcon  id='Savingicon'/>
    <div>
    <h2>$50,00,000</h2> {/*add add_comma function in place of span value  */}
    <div className='footerline'>
    <span >YDT savings identified</span>
    </div>
    </div>

    </div>
    </>
  )
}

import React from 'react'
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import './SavingH1.css'
import { addComma } from '../../../helpers/utils/methods';


export default function SavingH1(props) {
  return (
    <>
    <div className='Savingdata' id={props.style}>
    <TungstenSharpIcon  id='Savingicon'/>
    <div>
    <h2>{addComma(props.saving)}</h2> {/*add add_comma function in place of span value  */}
    <div className='footerline'>
    <span style={{width: '300px'}} >{props.title}</span>
    </div>
    </div>

    </div>
    </>
  )
}

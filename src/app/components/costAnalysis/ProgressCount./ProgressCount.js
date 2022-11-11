import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import { addComma } from '../../../helpers/utils/methods';
import "./ProgressCount.css";
export default function ProgressCount(props) {
    console.log("in props", props)
    let {style ,color,Tcolor} =props
    return (
        <>
            <div className='maindiv contentcenter' >
                <table class="table table-borderless " style={{color:color}}>
                    <tbody>
                        <tr>
                            <td className='titels'>{props.data.type}</td>
                        </tr>
                        <tr id='actualdata'>
                            <td className='count_data ' id={props.index===2 ?'':'boreder'} style={{ padding: "0" }} >
                                {props.data.type === "Open" ? <ErrorIcon id='warning' /> : null}
                                {props.data.type === "In-Progress" ? < WarningRoundedIcon id='error' /> : null}
                                {props.data.type === "Resolved" ? <CheckCircleRoundedIcon id='check' /> : null}
                                {props.data.value}
                            </td>
                        </tr>
                        <tr>
                            <td id='savingamt'>
                           {addComma(props.data.saving)} 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

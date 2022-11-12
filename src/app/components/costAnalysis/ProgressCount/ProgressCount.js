import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import { addComma } from '../../../helpers/utils/methods';
import "./ProgressCount.css";
import { borderRadius } from '@mui/system';
export default function ProgressCount(props) {
    console.log("in props", props)
    let {Background_color,Text_color,radius} =props
    return (
        <>
            <div className='maindiv contentcenter' >
                <table className="table table-borderless " style={{backgroundColor:Background_color,color:Text_color ,borderRadius:radius}}>
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

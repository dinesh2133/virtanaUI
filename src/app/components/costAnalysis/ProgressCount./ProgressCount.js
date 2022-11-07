import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import { addComma } from '../../../helpers/utils/methods';
import "./ProgressCount.css";
export default function ProgressCount(props) {
    console.log("in props", props)
    return (
        <>
            <div className='maindiv'>
                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <td >{props.data.type}</td>
                        </tr>
                        <tr>
                            <td className='count_data boreder' id={props.index===2 ?'':'boreder'} style={{ padding: "0" }}>
                                {props.data.id === 1 ? <ErrorIcon id='warning' /> : null}
                                {props.data.id === 2 ? < WarningRoundedIcon id='error' /> : null}
                                {props.data.id === 3 ? <CheckCircleRoundedIcon id='check' /> : null}
                                {props.data.value}
                            </td>
                        </tr>
                        <tr>
                            <td>
                           {addComma(props.data.saving)} 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

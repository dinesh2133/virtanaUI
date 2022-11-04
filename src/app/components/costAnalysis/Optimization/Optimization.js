import React, { Component ,useEffect ,useState} from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import  './OptimizationStyle.css'
import TungstenSharpIcon from '@mui/icons-material/TungstenSharp';
import { getoptimization ,GetData } from '../../../apis/costAnalysis.api';
import { Loader } from '../../../helpers/utils/loader';
import { addComma } from '../../../helpers/utils/methods';
import { request, gql } from 'graphql-request'

const Get_Optimization_Data = gql`
                        query optimization {
                            optimizationData{
                                id
                                value
                                saving
                                type
                            }
                      }`
export default function Optimization(props) {
    // const [obj, setObj] = useState([]);
    //     useEffect(()=>{
    //         getoptimization().then((response)=>{
    //             setObj(response);
    //         })
    //     }, []);
    const [data, setData]= useState([]);

    if(Object.keys(data).length <= 0 ){
        GetData(Get_Optimization_Data).then((response)=>{
          setData(response);
        })
      }   
  return (
    <>
    <section id={props.Style} className='Optimization'>
        
        {
        data?.optimizationData ? 
        (
            <>
                    <div className='Optimiz'>
                        <p className='Heading contentcenter'>Optimization Change Progress</p>
                        <div className='optimiztable'>
                        <span className='savingline'>Save</span>

                            <table className="table tabledata table-borderless" id='tabledata'>
                                <thead>
                                    <tr >

                                        {data?.optimizationData ?.map((value) => (

                                            <td id='tabletitle' key={value.id}>{value.type}</td>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className='tablebody'>
                                    <tr>
                                        {data?.optimizationData ?.map((value) => (

                                            <td id='actualdata' key={value.id}>
                                                {value.id===1 ?<ErrorIcon  id='warning'/>:null}
                                                {value.id===2 ?< WarningRoundedIcon id='error'/>:null }
                                                {value.id===3 ?<CheckCircleRoundedIcon id='check'/>:null}
                                                {value.value}</td>

                                        ))}
                                    </tr>
                                    <tr>
                                        {data?.optimizationData ?.map((value) => (

                                            <td id='savingvalue' key={value.id}>${addComma(value.saving)}</td>

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
            </>
        ) : 
        (
            <Loader />
            )
        }

    
    </section>        
        
    </>  )
}

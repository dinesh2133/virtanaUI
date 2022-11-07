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
import ProgressCount from '../ProgressCount./ProgressCount';
import  SavingH1 from '../SavingH1/SavingH1';

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
      console.log("opr",data)
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
                        {data?.optimizationData?.map((value,index) =>(
                           
                                <ProgressCount data={value} index={index}/>
                        ))}
                        </div>
                        <div>
                        <SavingH1/>
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

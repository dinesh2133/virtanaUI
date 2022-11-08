import React, {useState, useEffect} from "react";
// import StackedBarChart from "../../../helpers/charts/barCharts/stackedBarChart";
import {gql} from "graphql-request";
import UnstackedBarChart from "../../../helpers/charts/barCharts/unstackedBarChart/unstacketBarChart";
import "./costBySites.css";
import { dataForBarChart } from "./config";
import { GetData } from "../../../apis/costAnalysis.api";


const costBySiteQuery = gql`
    query {
        costbysites{
          dataSets{
            name
            data{
              value
            }
            label
          }
          datalabels{
            value
          }
        }
      }`


const CostBySites = (props) =>{
  const [options, setOptions]= useState();
  const [data, setData] = useState({});
  if(Object.keys(data).length <= 0){
    GetData(costBySiteQuery).then((response)=>{
      setData(response);
    })
  }

  useEffect(()=>{
    console.log("data", data);
    let temp = dataForBarChart(data["costbysites"]);
    setOptions(temp);
    console.log("temp", temp);
  }, [data])



    return(
        <div className="cost-by-site-div" id={props.style} >
            <UnstackedBarChart config={options}/>
        </div>
    )
}

export default CostBySites;
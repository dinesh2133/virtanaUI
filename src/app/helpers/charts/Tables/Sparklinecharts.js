import React from 'react';
import { render } from 'react-dom';
import SparkLineTable from './sparkLineTable.jsx';

const SparkLineChart = (props) =>{
    const {data} = props;
  return(
    <SparkLineTable>
    <tbody id="tbody-sparkline">
        {
            data?.map((e)=>{
                return (
                    <tr>
                        <th>{e.name}</th>
                        <td>{e.cost}</td>
                        <td data-sparkline={e.grdata} />
                        <td>{e.resourcecount}</td>
                    </tr>
                )
            })
        }
      {/* <tr>
        <th>Alabama</th>
        <td>254</td>
        <td data-sparkline="71, 78, 39, 66 " />
        <td>296</td>

      </tr> */}
    </tbody>
    </SparkLineTable>
  )
}

export default SparkLineChart;
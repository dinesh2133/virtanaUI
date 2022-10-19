
import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import HighCharts, { color } from "highcharts";
// import { option } from './config.js';
import {getCostTrendData} from '../../../apis/costAnalysis.api';
import rect from '../../../helpers/icons/icons8-rectangle-15.png';
import cloud from '../../../helpers/icons/cloud.png';
const CostTrendBar = () => {
    const [barData, setBarData] = useState([]);
  useEffect(()=>{
    getCostTrendData().then(response=>{
        setBarData(response);
        console.log('bar data is ', response);
    }).catch((error)=>{
        console.log('error');
    });
  }, []);

  let imgSrc = ['https://i.imgur.com/PB3zIxv.png', 'https://i.imgur.com/PB3zIxv.png', 'https://i.imgur.com/QPCNtc0.png', 'https://i.imgur.com/MgK6hti.png'];

    const option = {
        chart: {
        backgroundColor: '#353536',
        color: 'white',
        height: 250,
        type: "column",
        
        style: {
            // stroke: '#dddddd'
            textColor: 'white',
            fontColor: 'white',
            color: 'white'
            // color: '#fff'
        }
        },
        title: {
          text: 'Cost Trend',
          style:{
            color: 'white',
            fontSize: '12px'
          }
        },
          subtitle: {
              text: `Avg cost: $${barData?.averageCost} /month`,
              style:{
                color: 'white',
                fontSize: '1.3rem'
              }
          },
        legend: {
            useHTML:true,
            symbolWidth: 0,
           symbolHeight: 0,
            squareSymbol: false,
            itemStyle: {
              color: 'white',
            },
            labelFormatter: function() {
                return '<span class="legenditem"><img style="marginRight= "20px" " src="'+ imgSrc[this.index] +'" width="15" height="15"></span>' + this.name ;    
            }
        },
        xAxis: {
            categories: barData?.datalbels,
            labels:{
              style:{
                color: 'white'
              },
            },
            column: {
              shared: true,
              useHTML: true,
              formatter : function(){
                console.log('this value');
              }
            }
            
          },
          yAxis: {
            plotLines: [{
                color: 'white',
                width: 2,
                value: 1200,
                zIndex: 5
            }],
            gridLineDashStyle: 'shortdash',
            min: 0,
            labels:{
              style:{
                color: 'white'
              },
            },
            title: {
              enabled: false,
            },
        },
        plotOptions: {        
        series: {
            pointWidth: 15,
            stacking: 'normal',
        }
        },

        series: []
    };
    const customBorder = {
        bottom: 0,
        top: 0,
        left: 1,
        right: 1
    }
    const customColors = {
        aws: '#B4CDE6',
        azure: '#277BC0',
        forecaste: 'transparent',
        onPremise: '#5F9DF7'
    }
    const customBOrderWidth = (e)=>{
      e.data.map((element, index)=>{
        if(index === 9){
          return 2;
        }
      })
    }
    if(barData?.dataSets){
    barData?.dataSets.map((e)=>{
    option?.series.push(
                {
                    size: 10,
                    data: e?.data,
                    name: e?.label,
                    borderWidth: 2,
                    color: customColors[e?.name],
                    borderWidth: e?.monthlyForecast ? .5 : 0,
                    dashStyle: 'dash'
                }
            );  
    });
}
  return (
    <div className="bar-chart-component">
      <HighchartsReact style={{width: '90%', paddingLeft: '10px'}} highcharts={HighCharts} options={option} />
    </div>
  );
};

export default CostTrendBar;

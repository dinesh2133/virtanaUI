import { addComma } from "../../../helpers/utils/methods";

export const dataForBarChart = (data, customStyle) =>{
console.log("sdflksjoielskdjfskj", data);
let barData = data;
// if(barData){
//   barData = JSON.parse(barData);
// }else{
//   barData = data;
// }
let DataLabels = [];
DataLabels = barData?.datalabels?.map((e)=>{
  return e.labels;
})

console.log('bar data in config is ', DataLabels);
let imgSrc = ['https://i.imgur.com/v67Jqaa.png', 'https://i.imgur.com/PB3zIxv.png', 'https://i.imgur.com/QPCNtc0.png', 'https://i.imgur.com/MgK6hti.png'];

const option = {
        chart: {
        backgroundColor: '#353536',
        color: 'white',
        height: 255,
        type: "column",
        
        style: {
            // stroke: '#dddddd'
            textColor: 'white',
            fontColor: 'white',
            color: 'white',
            marginTop: 10,
            // color: '#fff'
        }
        },
        title: {
          text: 'Cost Trend',
          style:{
            color: 'white',
            fontSize: '14px'
          }
        },
          subtitle: {
              text: `Avg cost: $${ barData ? addComma(barData?.averageCost) : "loading..."} /month`,
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
                return '<span class="legenditem"><img src="'+ imgSrc[this.index] +'" width="15" height="15" style="margin-right: 5px"></span>' + this.name ;    
            }
        },
        xAxis: {
            categories: DataLabels,
            labels:{
              style:{
                color: 'white'
              },
            },
            column: {
              shared: true,
              useHTML: true
            }
            
          },
          yAxis: {
            plotLines: [{
                color: 'white',
                width: 2,
                value: barData?.averageCost,
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
              stacking: customStyle ? customStyle.stacked : true
          }
        },

        series: []
    };
   
    let customColors = {
        aws: '#B4CDE6',
        azure: '#277BC0',
        forecaste: 'transparent',
        onPremise: '#5F9DF7'
    }

    if(customStyle.customColors){
      customColors = customStyle.customColors;
    }
    // if(customStyle.barType){
    //   plotOptions.series.stacking = customStyle.barType;
    // }

    if(barData?.dataSets){
    barData?.dataSets.map((e)=>{
    option?.series.push(
                {
                    size: 10,
                    data: e?.data?.map((element)=>{
                      return element.value
                    }),
                    name: e?.label,
                    // borderWidth: 2,
                    color: customColors[e?.name],
                    borderWidth: 1,
                    dashStyle: e?.monthlyForecast ? 'dash' : 'solid'
                }
            );  
    });
}
return option;
}
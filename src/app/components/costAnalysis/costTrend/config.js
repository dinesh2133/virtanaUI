import { addComma } from "../../../helpers/utils/methods";

export const dataForBarChart = (props) =>{
  const {data, style, customStyle} = props;
// console.log("sdflksjoielskdjfskj", data);
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
        backgroundColor: props?.customStyle ? customStyle.backgroundColor : '#353536',
        
        height:  props?.customStyle ? customStyle.height : 255,
        type: props?.customStyle ? customStyle.chartType : "column",
        
        style: {
            marginTop: 10,
        }
        },
        title: {
          text: 'Cost Trend',
          aligh : props?.customStyle ? props?.customStyle?.titlePosition?.align : "center",
          x: props?.customStyle ? props.customStyle.titlePosition.x : -20,
            y: props?.customStyle ? props.customStyle.titlePosition.y : 5,
          style:{
            color: props?.customStyle ? customStyle.color : 'white',
            fontSize: '14px'
          }
        },
          subtitle: {
              text: `Avg cost: $${ barData ? addComma(barData?.averageCost) : "loading..."} /month`,
              align: props?.customStyle ? props.customStyle.subtitlePosition.align : "center",
              x: props?.customStyle ? props.customStyle.subtitlePosition.x : -20,
              y: props?.customStyle ? props.customStyle.subtitlePosition.y : 35,
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
            floating: props?.customStyle ? props?.customStyle?.legendStyle?.floating : false,
            width: props?.customStyle ? props?.customStyle?.legendStyle?.width : "",
            height: props?.customStyle ? props?.customStyle?.legendStyle?.height :  "",
            align: props?.customStyle ? props?.customStyle?.legendStyle?.align : "center",
            y: props?.customStyle ? props?.customStyle?.legendStyle?.y : 0,
            x: props?.customStyle ? props?.customStyle?.legendStyle?.x : 0,
            backgroundColor: props?.customStyle ? props?.customStyle?.legendStyle?.backgroundColor : "#353536",
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
              stacking: props?.customStyle ? customStyle.stacked : true
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

    if(props?.customStyle?.customColors){
      customColors = props.customStyle.customColors;
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

// if(customStyle){
//   option.title
// }

return option;
}
const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

// Access-Control-Allow-Origin: *
app.use(
    cors({
        origin: '*'
    })
)


app.use(cors({
    origin:'*'
}))
app.listen(port, ()=>{
    console.log('server is up and running');
});

app.get('/insights', (req, res)=>{
    let insight_data=[{id:1, type:'In-progress',msg:"132 New E8C2 instances added costing $5459 per month of the last years"},
         {id:2, type:'Open',msg:"132 New EC2 instances added costing $5459 per month "},
         {id:3, type:'In-progress',msg:"132 New EC2 instances added costing $5459 per month of the last years"},
         {id:4, type:'suggestions',msg:"132 New EC2 instances added costing $5459 per month "},
         {id:5, type:'Open',msg:"132 New EC2 instances added costing $5459 per month "},
         {id:6, type:'In-progress',msg:"132 New EC2 instances added costing $5459 per "},
         {id:7, type:'Open',msg:"132 New EC2 instances added costing $5459 per month of the last years"},
         {id:8, type:'suggestions',msg:"132 New EC2 instances added costing $5459 per month of the last years"}]
    res.send(insight_data)
})
app.get('/optimization', (req, res)=>{
    let optimization_data=[{ id:1, type: 'Open', value: 2000, saving:12000 },
    { id:2, type: 'In-Progress', value: 100, saving: 25000 },
    { id:3, type: 'Resolved', value: 2000, saving: 1120000 }]
    res.send(optimization_data)
})
app.get('/savingopportunities', (req, res)=>{
    let savingopportunities_data=[{ key: 1, name: "Idle cloud Resourses", amount:1000000, suggestions: 5 },
    { key: 2, name: " Cloud Resizing", amount:6000, suggestions: 1 },
    { key: 3, name: "Workload", amount: 80000, suggestions: 1 },
    { key: 4, name: "On-Premise", amount: 800, suggestions: 2 }]
    res.send(savingopportunities_data)
})

app.get('/costTrendData', (req, res)=>{
    let temp = {
        averageCost: 900,
        datalbels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dataSets: [
            {
                label: "On-Premise",
                data: [522,342,542,142,352,546,120,192,323,374,125,123],
                name: 'onPremise',
                pointStyle: 'rect',
            },
            {
                label: "AWS",
                data: [600,202,520,102,120,228,462,132,132,262,442,112],
                name: 'aws',
                pointStyle: 'aws'
            },
            {
                label: "Azure",
                data: [352,348,520,127,320,544,132,112,332,434,152,192],
                name: 'azure',
                pointStyle: 'azure',
            },
            {
                data: [0,0,0,0,0,0,0,0,0,673,0,0],
                label: "Forecast for this month total",
                pointStyle: 'rect',
                monthlyForecast: true,
                name: 'forecaste'
            }
        ]
    }
    setTimeout(() => {
        res.json(temp);    
    }, 5000);
    
});

app.get("/topTenCostChanges", (req, res)=>{
    let temp= [
        {
            text: 'Truck Monitoring',
            price: '28,233',
            costStatus: 'up',
            id: 0
        },
        {
            text: 'Cargo Ship Monitoring',
            price: '43,233',
            costStatus: 'up',
            id: 1
        },
        {
            text: 'Logistics Operation',
            price: '33,233',
            costStatus: 'down',
            id: 2
        },
        {
            text: 'Warehouse Backup',
            price: '15,233',
            costStatus: 'down',
            id: 3
        },
        {
            text: 'HR Benefits Portal',
            price: '10,233',
            costStatus: 'down',
            id: 4
        },
        {
            text: 'Truck Monitoring',
            price: '28,233',
            costStatus: 'up',
            id: 5
        },
        {
            text: 'HR Benefits Portal',
            price: '10,233',
            costStatus: 'down',
            id: 6
        },
        {
            text: 'Truck Monitoring',
            price: '28,233',
            costStatus: 'up',
            id: 7
        },
        {
            text: 'Truck Monitoring',
            price: '38,233',
            costStatus: 'up',
            id: 8
        },
        {
            text: 'Truck Monitoring',
            price: '48,233',
            costStatus: 'up',
            id: 9
        },
    ]
    res.send(temp);
});

app.get("/montlyCost", (req, res) =>{
    let temp = {
        monthlyCost: 54699000,
        mtdCost: 43499,
        mtdCostInPercentage: 60,
        costForLastMonth: 50000,
        costStatus: 'up',
        costPercentage: '25%'
    }
    setTimeout(() => {
        
    }, 3000);
    res.json(temp);
})





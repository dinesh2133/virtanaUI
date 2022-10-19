const express = require('express');
const app = express();
const port = 30001;
const cors= require("cors");

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
    let savingopportunities_data=[{ key: 1, name: "Idle cloud Resourses", amount:10000, suggestions: 5 },
    { key: 2, name: " Cloud Resizing", amount:6000, suggestions: 1 },
    { key: 3, name: "Workload", amount: 80000, suggestions: 1 },
    { key: 4, name: "On-Premise", amount: 800, suggestions: 2 }]
    res.send(savingopportunities_data)
})
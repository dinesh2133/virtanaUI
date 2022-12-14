const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLScalarType,
    GraphQLBoolean
} = require("graphql");
const cors =  require("cors");
const app = express();

app.use(cors({
    origin: "*"
}))

const topTenCostChanges= [
        {
            text: 'Truck Monitoring',
            price: 28233,
            costStatus: 'up',
            id: 0
        },
        {
            text: 'Cargo Ship Monitoring',
            price: 43233,
            costStatus: 'up',
            id: 1
        },
        {
            text: 'Logistics Operation',
            price: 33233,
            costStatus: 'down',
            id: 2
        },
        {
            text: 'Warehouse Backup',
            price: 15233,
            costStatus: 'down',
            id: 3
        },
        {
            text: 'HR Benefits Portal',
            price: 10233,
            costStatus: 'down',
            id: 4
        },
        {
            text: 'Truck Monitoring',
            price: 28233,
            costStatus: 'up',
            id: 5
        },
        {
            text: 'HR Benefits Portal',
            price: 10233,
            costStatus: 'down',
            id: 6
        },
        {
            text: 'Truck Monitoring',
            price: 28233,
            costStatus: 'up',
            id: 7
        },
        {
            text: 'Truck Monitoring',
            price: 38233,
            costStatus: 'up',
            id: 8
        },
        {
            text: 'Truck Monitoring',
            price: 48233,
            costStatus: 'up',
            id: 9
        },
    ]

    const CostTrendData = {
        averageCost: 1200,
        datalabels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dataSets: [
            {
                data: [0,0,0,0,0,0,0,0,0,673,0,0],
                label: "Forecast for this month total",
                monthlyForecast: true,
                name: 'forecaste'
            },
            {
                label: "On-Premise",
                data: [522,342,542,142,352,546,120,192,323,374,125,123],
                name: 'onPremise'
            },
            {
                label: "AWS",
                data: [600,202,520,102,120,228,462,132,132,262,442,112],
                name: 'aws'
            },
            {
                label: "Azure",
                data: [352,348,520,127,320,544,132,112,332,434,152,192],
                name: 'azure'
            }
        ]
    }

    const monthlyCostData = {
        monthlyCost: 54699000,
        mtdCost: 43499,
        mtdCostInPercentage: 60,
        costForLastMonth: 50000,
        costStatus: 'up',
        costPercentage: '25%',
        lastMonthCostInPercentage: 95
    }

    let optimization_data=[
        { id:1, type: 'Open', value: 2000, saving:12000 },
    { id:2, type: 'In-Progress', value: 100, saving: 25000 },
    { id:3, type: 'Resolved', value: 2000, saving: 1120000 }]


    let insight_data=[{id:1, type:'In-progress',msg:"132 New E8C2 instances added costing $5459 per month of the last years"},
         {id:2, type:'Open',msg:"132 New EC2 instances added costing $5459 per month "},
         {id:3, type:'In-progress',msg:"132 New EC2 instances added costing $5459 per month of the last years"},
         {id:4, type:'suggestions',msg:"132 New EC2 instances added costing $5459 per month "},
         {id:5, type:'Open',msg:"132 New EC2 instances added costing $5459 per month "},
         {id:6, type:'In-progress',msg:"132 New EC2 instances added costing $5459 per "},
         {id:7, type:'Open',msg:"132 New EC2 instances added costing $5459 per month of the last years"},
         {id:8, type:'suggestions',msg:"132 New EC2 instances added costing $5459 per month of the last years"}]


    let Costaccount_data=[
    {name:'AWS-021902',cost:31900,grdata:"30,20,50,10" ,resourcecount:6881},
    {name:'GCP-021902',cost:39900,grdata:"30,20,50,10" ,resourcecount:5681},
    {name:'Azure-021902',cost:21900,grdata:"30,20,50,10" ,resourcecount:9881},
    {name:'AWS-021902',cost:1900,grdata:"30,20,50,10" ,resourcecount:1081},
    {name:'AWS-021902',cost:91900,grdata:"30,20,50,10" ,resourcecount:2381},
    {name:'Azur-021902',cost:31900,grdata:"30,20,50,10" ,resourcecount:4181},
    {name:'AWS-021902',cost:21100,grdata:"30,20,50,10" ,resourcecount:7981},
    {name:'GCP-021902',cost:31540,grdata:"30,20,50,10" ,resourcecount:6281},
    {name:'AWS-021902',cost:22200,grdata:"30,20,50,10" ,resourcecount:9781},
    {name:'GCP-021902',cost:32100,grdata:"30,20,50,10" ,resourcecount:3081}
]

    let savingopportunities_data=[{ id: 1, name: "Idle cloud Resourses", amount:1000000, suggestions: 5 },
    { id: 2, name: " Cloud Resizing", amount:6000, suggestions: 1 },
    { id: 3, name: "Workload", amount: 80000, suggestions: 1 },
    { id: 4, name: "On-Premise", amount: 800, suggestions: 2 }]
    
    let Costbyacc_data=[
        {id:1,name: 'Port Opration',y: 36},
        {id:2,name: 'Warehouse',y: 27},  
        {id:3,name: 'Shipping',y: 20},
        {id:4,name: 'CRM & HR',y: 17}]
    const cost_by_sites_data = {
        datalabels: ["Azure West Europe","Azure Southeast Asia","San Jose DC","AWS us-west-2","AWS us-east-1","Azure Australia East", "Chicago DR DC"],
        dataSets: [
            {
                label: "Azure West Europe",
                data: [400000, 320000, 200000, 130000, 130000, 100000, 50000],
                name: "test"
            }
            // {
            //     label: "Azure Southeast Asia",
            //     data: [305000],
            //     name: "test"
            // },
            // {
            //     label: "San Jose DC",
            //     data: [280000],
            //     name: "test"
            // },
            // {
            //     label: "AWS us-west-2",
            //     data: [100000],
            //     name: "test"
            // },
            // {
            //     label: "AWS us-east-1",
            //     data: [100000],
            //     name: "test"
            // },
            // {
            //     label: "Azure Australia East",
            //     data: [90000],
            //     name: "test"
            // },
            // {
            //     label: "Chicago DR DC",
            //     data: [70000],
            //     name: "test"
            // }
        ]
    }
    
    
    ///////// custom objects 



const topTenType = new GraphQLObjectType({
    name: "TopTenCostChanges",
    description: "return top ten cost chages due to app",
    fields: ()=>({
        text: { type : GraphQLString},
        price: { type : new GraphQLNonNull(GraphQLInt)},
        costStatus: { type : GraphQLString},
        id : { type : new GraphQLNonNull(GraphQLInt)}
    })
})

const dataType = new GraphQLObjectType({
    name: "dataType",
    description: "list of data",
    fields: ()=>({
        value: {type: new GraphQLNonNull(GraphQLInt),
            resolve: (parent)=>{ return parent }
        }
    })
})

const dataSetsType = new GraphQLObjectType({
    name: "chartData",
    description: "list of data",
    fields: () =>({
        name: { type: GraphQLString},
        data: { type : new GraphQLNonNull(GraphQLList(dataType))},
        label: { type: GraphQLString},
        monthlyForecast: { type : GraphQLBoolean}
        
    })
})

const labelType =  new GraphQLObjectType({
    name: "labels",
    description: "label data",
    fields: ()=>({
        labels: { 
            type : GraphQLString,
            resolve: (parent)=> parent
        }
    })
})

const monthlyCostType = new GraphQLObjectType({
    name: "MonthlyCosts",
    description: "Monthly Cost Data",
    fields: ()=>({
        monthlyCost: { type : new GraphQLNonNull(GraphQLInt) },
        mtdCost: { type : new GraphQLNonNull(GraphQLInt) },
        mtdCostInPercentage: { type : new GraphQLNonNull(GraphQLInt) },
        costForLastMonth: { type : new GraphQLNonNull(GraphQLInt) },
        costStatus: { type : GraphQLString },
        costPercentage: { type : GraphQLString },
        lastMonthCostInPercentage : { type : new GraphQLNonNull(GraphQLInt) }
    })
})

const costTrendType = new GraphQLObjectType({
    name: "CostTrend",
    description: "data for cost trend bar chart",
    fields: ()=> ({
        averageCost: { type : new GraphQLNonNull(GraphQLInt)},
        dataSets: { type: new GraphQLList(dataSetsType)},
        datalabels : { type : new GraphQLList(labelType)}
        
        // dataSets: { type: GraphQLString}
    })
})

const DataTypeOfCostBySite = new GraphQLObjectType({
    name: "dataforcostbysite",
    description: "data fields for cost by site data sets",
    fields: ()=>({
        value: {type: new GraphQLNonNull(GraphQLInt),
            resolve: (parent)=>{ return parent }
        }
    })
})

const costBySiteDataSetsType = new GraphQLObjectType({
    name: "costbysitedataset",
    description: "data for cost by site data sets",
    fields: ()=>({
        name: { type: GraphQLString},
        data: { type : new GraphQLNonNull(GraphQLList(DataTypeOfCostBySite))},
        label: { type: GraphQLString},
    })
})

const costBySiteDatalabelsType = new GraphQLObjectType({
    name: "costBySiteDataLabels",
    description: "data labels for cost by site ",
    fields: () =>({
        value: {
            type : GraphQLString,
            resolve:(parent) => parent
        }
    })
})

const costBySiteType = new GraphQLObjectType({
    name: "costbysite",
    description: "data for cost by sites",
    fields: ()=>({
        dataSets: { type: new GraphQLList(costBySiteDataSetsType)},
        datalabels : { type : new GraphQLList(costBySiteDatalabelsType)}
    })
})

const optimizationdatatype = new GraphQLObjectType({
    name:'optimization',
    description:'data of objects',
    fields: () =>({
        type:{type:GraphQLString},
        value:{type:new GraphQLNonNull(GraphQLInt) },
        saving:{type:new GraphQLNonNull(GraphQLInt) },
        id:{type:new GraphQLNonNull(GraphQLInt) }
    })
})

const Insigthstype= new GraphQLObjectType({
    name:'Insigths',
    description:'data of objects',
    fields: () =>({
        type:{type:GraphQLString},
        msg:{type:GraphQLString},
        id:{type:new GraphQLNonNull(GraphQLInt) }
    })
})

const savingopportunitiestype= new GraphQLObjectType({
    name:'savingopportunities',
    description:'data of objects',
    fields: () =>({
        suggestions:{type:GraphQLString},
        name:{type:GraphQLString},
        id:{type:new GraphQLNonNull(GraphQLInt) },
        amount:{type:new GraphQLNonNull(GraphQLInt) }
    })
})
const costbyacctype= new GraphQLObjectType({
    name:'costbyacc',
    description:'data of cost of accounts',
    fields: () =>({
        id:{type:new GraphQLNonNull(GraphQLInt) },
        name:{type:GraphQLString},
        y:{type:new GraphQLNonNull(GraphQLInt) }
    })
})

const costaccounttype = new GraphQLObjectType({
    name: "CostAccount",
    description: "return top ten expensive account ",
    fields: ()=>({
        name: { type : GraphQLString},
        cost: { type : new GraphQLNonNull(GraphQLInt)},
        grdata: { type : GraphQLString},
        resourcecount: { type : new GraphQLNonNull(GraphQLInt)}
    })
})


const RootQuery = new GraphQLObjectType({
    name : "CostAnalysis",
    description: "Data For Cost Analysis",
    fields: ()=>({
            toptenconstchanges:{
                type : new GraphQLList(topTenType),
                resolve: ()=> topTenCostChanges
            },
            barchartdata: {
                type: costTrendType,
                resolve: (person)=> CostTrendData
            },
            monthlycost: {
                type: monthlyCostType,
                resolve: () => monthlyCostData
            },
            optimizationData: {
                type: new GraphQLList(optimizationdatatype),
                resolve: ()=> optimization_data
            },
            insightData : {
                type : new GraphQLList(Insigthstype),
                resolve: ()=> insight_data
            },
            savingopportunitiesData : {
                type: new GraphQLList(savingopportunitiestype),
                resolve: () => savingopportunities_data
            },
            costbysites : {
                type: costBySiteType,
                resolve: (person)=> cost_by_sites_data
            },
            costbyaccdata:{
                type: new GraphQLList(costbyacctype),
                resolve: () => Costbyacc_data
            },
            costaccount:{
                type: new GraphQLList(costaccounttype),
                resolve: () => Costaccount_data
            },

    })

})


const schema = new GraphQLSchema({
    query: RootQuery
})

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true,
}))

app.listen(5000, ()=>{
    console.log("graphql server is up and running");
})
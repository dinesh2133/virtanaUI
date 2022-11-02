const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLScalarType
} = require("graphql");
const app = express();

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
        costPercentage: '25%'
    }

    let optimization_data=[{ id:1, type: 'Open', value: 2000, saving:12000 },
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


    let savingopportunities_data=[{ id: 1, name: "Idle cloud Resourses", amount:1000000, suggestions: 5 },
    { id: 2, name: " Cloud Resizing", amount:6000, suggestions: 1 },
    { id: 3, name: "Workload", amount: 80000, suggestions: 1 },
    { id: 4, name: "On-Premise", amount: 800, suggestions: 2 }]
    ///////// custom objects 



const topTenType = new GraphQLObjectType({
    name: "TopTenCostChanges",
    description: "return top ten cost chages due to app",
    fields: ()=>({
        text: { type : GraphQLString},
        price: { type : new GraphQLNonNull(GraphQLInt)},
        constStatus: { type : GraphQLString},
        id : { type : new GraphQLNonNull(GraphQLInt)}
    })
})

const dataType = new GraphQLObjectType({
    name: "dataType",
    description: "list of data",
    fields: ()=>({
        value: {type: GraphQLString,
            resolve: (parent)=> parent
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
        // monthlyForecast: { type : new GraphQLScalarType()}
        
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
        costPercentage: { type : GraphQLString }
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
            }


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
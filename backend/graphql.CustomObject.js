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

export const monthlyCostType = new GraphQLObjectType({
    name: "MonthlyCosts",
    description: "Monthly Cost Data",
    fields: ()=>({
        monthlyCost: { type : new GraphQLNonNull(GraphQLInt) }
    })
})


// monthlyCost: 54699000,
//     mtdCost: 43499,
//     mtdCostInPercentage: 60,
//     costForLastMonth: 50000,
//     costStatus: 'up',
//     costPercentage: '25%'
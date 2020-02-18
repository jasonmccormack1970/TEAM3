const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'TaskPlanType',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        notes: { type: GraphQLString },
        status: { type: GraphQLString },
        flight_number: { type: GraphQLInt },
        requiredAt: { type: GraphQLString },
        completedAt: { type: GraphQLString },
    }),
});

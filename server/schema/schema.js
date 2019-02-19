const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const BookTypes = {
	fields: () => ({
		id: GraphQLString,
		name: GraphQLString,
		genre: GraphQLString
	})
};

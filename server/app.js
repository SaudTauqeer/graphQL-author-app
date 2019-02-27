//config
const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

//graphql-express middleware
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(port, () => {
	console.log(`Node + GraphQL server is running at http://localhost:${port}`);
});

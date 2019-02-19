//config
const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;
const graphqlHTTP = require('express-graphql');

app.listen(port, () => {
	console.log(`Node + GraphQL server is running.`);
});

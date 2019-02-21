//config
import express from 'express';
const app = express();
const port = 4000;
const graphqlHTTP = require('express-graphql');

//graphql-express middleware
//app.use('/graphql');

app.listen(port, () => {
	console.log(`Node + GraphQL server is running at http://localhost:${port}`);
});

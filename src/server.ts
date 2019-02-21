//config
import express from 'express';
const app = express();
const port = 4000;
import * as graphqlHTTP from 'express-graphql';

//graphql-express middleware
//app.use('/graphql');

app.listen(port, () => {
	console.log(`Node + GraphQL server is running at http://localhost:${port}`);
});

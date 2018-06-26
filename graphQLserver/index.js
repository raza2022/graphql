import express from 'express'
import graphQLHTTP from 'express-graphql'

var app = express();

import schema from './schema'

app.use(graphQLHTTP({
    schema,
    graphiql: true
}));

app.listen(5000);
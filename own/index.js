import express from 'express'
import graphQLHttp from 'express-graphql'

import schema from './schema'
var app = express();

app.use(graphQLHttp({
    schema,
    graphiql: true
}))

app.listen(5000);
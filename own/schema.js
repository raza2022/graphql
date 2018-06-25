import { GraphQLSchema, GraphQLObjectType } from 'graphql'

let QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields :() => ({
        person: {
            type: PersonType,

        }
    })
})
export default new GraphQLSchema({
    query: QueryType
})
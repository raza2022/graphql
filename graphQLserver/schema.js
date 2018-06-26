import { GraphQLString, GraphQLSchema, GraphQLObjectType } from 'graphql'

const BASE_URL = 'http://localhost:8000';

import fetch from 'node-fetch'

const NoteType = new GraphQLObjectType({
    name: 'Note',
    description: '...',

    fields :(note) => ({
        id: {
            type: GraphQLString,
        },
        title: {
            type: GraphQLString
        },
        text: {
            type: GraphQLString
        }
    })
});

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
        note: {
            type: NoteType,
            args: {
                id: {
                    type: GraphQLString,
                }
            },
            resolve: (root, args) => {
                return fetch(`${BASE_URL}/notes/${args.id}`)
                    .then(res => res.json())
            }

        },

    })
});

export default new GraphQLSchema({
    query: QueryType
})
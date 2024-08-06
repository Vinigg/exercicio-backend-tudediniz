const { ApolloServer } = require('apollo-server')
const graphql = require('./src/graphql');
const config = require('./src/config')

const server = new ApolloServer({
    ...graphql,
    ...config,
})

server.listen()


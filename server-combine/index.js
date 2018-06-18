const { ApolloServer } = require('apollo-server')
const resolvers = require('./resolvers.js')
const typeDefs = require('./schema.js')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})

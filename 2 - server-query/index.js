require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@YOUR-HOST:5432/${
    process.env.DB
  }`,
  {
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  }
)

const Framework = sequelize.define('frameworks', {
  name: {
    type: Sequelize.STRING
  },
  git: {
    type: Sequelize.STRING
  }
})

const typeDefs = gql``

const resolvers = {}
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})

require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  `postgres://${process.env.USERNAME}:${
    process.env.PASSWORD
  }@ec2-23-23-247-245.compute-1.amazonaws.com:5432/${process.env.DB}`,
  {
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const Framework = sequelize.define('frameworks', {
  name: {
    type: Sequelize.STRING
  },
  git: {
    type: Sequelize.STRING
  }
})

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Framework {
    id: String
    name: String
    git: String
  }

  type Query {
    frameworks: [Framework]
  }

`

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    frameworks: async () => {
      try {
        const frameworks = await Framework.findAll()

        return frameworks
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})

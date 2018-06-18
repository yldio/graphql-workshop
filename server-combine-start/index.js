const { ApolloServer, gql } = require('apollo-server')
const Sequelize = require('sequelize')

require('dotenv').config()

const sequelize = new Sequelize(
  `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@eYOUR-HOST:5432/${
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

  type Mutation {
    addFramework(name: String, git: String): Framework
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
  },
  Mutation: {
    addFramework: async (_, { name, git }) => {
      await Framework.sync()
      try {
        const framework = Framework.create({
          name,
          git
        })

        return framework
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

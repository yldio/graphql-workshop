require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const Sequelize = require("sequelize");

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
);

const Framework = sequelize.define("frameworks", {
  name: {
    type: Sequelize.STRING
  },
  git: {
    type: Sequelize.STRING
  }
});

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  type Framework {
    id: String
    name: String
    git: String
  }

  type Query {
    frameworks: [Framework]
  }
`;

const resolvers = {
  Query: {
    frameworks: () => Framework.findAll()
  }
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

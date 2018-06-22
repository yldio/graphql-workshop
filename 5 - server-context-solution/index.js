const { ApolloServer, gql } = require("apollo-server");
const Sequelize = require("sequelize");

require("dotenv").config();

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
Framework.sync();

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

  type Mutation {
    addFramework(name: String, git: String): Framework
  }
`;

const resolvers = {
  Query: {
    frameworks: (_, ___, ctx) => ctx.db.findAll()
  },
  Mutation: {
    addFramework: async (_, { name, git }, ctx) => {
      try {
        const framework = ctx.db.create({
          name,
          git
        });

        return framework;
      } catch (e) {
        throw new Error(e);
      }
    }
  }
};

const context = {
  db: Framework
};

const server = new ApolloServer({ typeDefs, resolvers, context });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

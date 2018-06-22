const { ApolloServer, gql } = require("apollo-server");

const frameworks = [
  {
    name: "React",
    git: "https://github.com/facebook/react/",
    stars: 104170
  },
  {
    name: "Vue",
    git: "https://github.com/vuejs/vue/",
    stars: 104483
  }
];

const typeDefs = gql`
  type Framework {
    name: String
    git: String
    stars: Int
  }

  type Query {
    frameworks: [Framework]
  }
`;

const resolvers = {
  Query: {
    frameworks: () => frameworks
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

const { gql } = require("apollo-server");
module.exports = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  type Framework {
    id: String
    name: String
    git: String
    stars: Int
  }

  type Query {
    frameworks: [Framework]
  }

  type Mutation {
    addFramework(name: String, git: String): Framework
  }
`;

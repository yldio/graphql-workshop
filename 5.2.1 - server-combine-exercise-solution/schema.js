const { gql } = require("apollo-server");
module.exports = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Framework {
    id: String
    name: String
    git: String
    stars: Int
    description: String
    avatar: String
  }

  type Query {
    frameworks: [Framework]
  }

  type Mutation {
    addFramework(name: String, git: String): Framework
  }
`;

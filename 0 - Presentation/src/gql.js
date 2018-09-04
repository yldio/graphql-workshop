import gql from 'graphql-tag';

const Schema = gql`
  type Speaker {
    id: ID!
    name: String
    photo: String
    talks: [Talk]
  }

  type Talk {
    name: String
    speaker: Speaker
  }
`;

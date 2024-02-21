import { gql } from 'apollo-server-express';

export const QueryTypes = gql`
  type Query {
    getAllPosts: [Post]
  }
`;

import { gql } from 'apollo-server-express';

export const PostTypes = gql`
  type Post {
    id: ID!
    title: String!
    description: String!
  }
`;

import { gql } from 'apollo-server-express';

export const PostInputTypes = gql`
  input PostInput {
    title: String
    description: String
  }
`;

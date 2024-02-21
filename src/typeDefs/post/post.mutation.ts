import { gql } from 'apollo-server-express';

export const MutationTypes = gql`
  type Mutation {
    createPost(post: PostInput): Post
  }
`;

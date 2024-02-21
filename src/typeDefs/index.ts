import { gql } from 'apollo-server-express';
import postTypeDefs from './post/post.typeDefs';

export const typeDefs = gql`
  ${postTypeDefs}
`;

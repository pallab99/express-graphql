import { gql } from 'apollo-server-express';
import { PostTypes } from './post.type';
import { QueryTypes } from './post.query';
import { MutationTypes } from './post.mutation';
import { PostInputTypes } from './post.inputType';

const postTypeDefs = gql`
  ${PostTypes}
  ${QueryTypes}
  ${PostInputTypes}
  ${MutationTypes}
`;

export default postTypeDefs;

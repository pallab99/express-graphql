import postResolver from './post.resolver';

export const postResolvers = {
  Query: {
    getAllPosts: postResolver.getAllPosts,
  },

  Mutation: {
    createPost: postResolver.createPost,
  },
};

import PostModel from '../models/post';

export const resolvers = {
  Query: {
    getAllPosts: async () => {
      try {
        const allPost = await PostModel.find();
        return allPost;
      } catch (error) {
        return 'Internal server error';
      }
    },
  },

  Mutation: {
    createPost: async (_: any, { post }: { post: any }) => {
      console.log('hello', post);
      const newPost = await PostModel.create(post);

      return newPost;
    },
  },
};

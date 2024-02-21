import PostModel from '../../models/post';
import { ApolloError } from 'apollo-server-express';
class PostResolverClass {
  async getAllPosts(): Promise<any> {
    try {
      const allPost = await PostModel.find();
      return allPost;
    } catch (error) {
      throw new ApolloError('Internal Server Error', 'INTERNAL_SERVER_ERROR', {
        statusCode: 500,
      });
    }
  }

  async createPost(_: any, { post }: { post: any }): Promise<any> {
    try {
      const newPost = await PostModel.create(post);
      return newPost;
    } catch (error) {
      throw new ApolloError('Internal Server Error', 'INTERNAL_SERVER_ERROR', {
        statusCode: 500,
      });
    }
  }
}

export default new PostResolverClass();

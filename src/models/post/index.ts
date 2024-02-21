import { Schema, model } from 'mongoose';
import { IPostModel } from '../../interfaces/models/post';

const postSchema: Schema<IPostModel> = new Schema<IPostModel>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const PostModel = model<IPostModel>('Post', postSchema);

export default PostModel;

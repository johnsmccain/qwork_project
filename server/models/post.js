import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const postSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: { type: String, default: 'Post' },
    category: { type: String },
    postedBy: {
      type: ObjectId,
      required: true,
      ref:"User"
    },
    likes: [{ type: ObjectId, ref: 'User' }],
    comments: [
      {
        text: String,
        user: {
          type: ObjectId,
          ref: 'User',
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Post', postSchema);

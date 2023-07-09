import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const workerSchema = mongoose.Schema(
  {
    user: {
      type: ObjectId,
      required: true,
      ref:"User"
    },
    bio: {
        type: String,
      },
    followers: [
      {
        type: ObjectId,
        ref: 'User',
      },
    ],
    following: [
      {
        type: ObjectId,
        ref: 'User',
      },
    ],
    category:{
        type: String,
        required: true
    }
  },

  { timestamps: true }
);

export default mongoose.model('Worker', workerSchema);

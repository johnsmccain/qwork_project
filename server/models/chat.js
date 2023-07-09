import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const chatSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  users: [{
    type: ObjectId,
    ref: 'User',
    required: true,
  }],
  delivered: {
    type: Boolean,
    default: false
  },
  seen: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

export default mongoose.model('Chat', chatSchema);

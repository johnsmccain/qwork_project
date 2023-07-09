import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const bookMarkSchema = mongoose.Schema(
  {
    service:{
      type: ObjectId,
      ref: "User"
    }
  },

  { timestamps: true }
);

export default mongoose.model('BookMark', bookMarkSchema);

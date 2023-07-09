import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const addreeSchema = mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,

    },
    lga: {
      type: String,
      required: true
    },

    address: {
      type: String,
    },
    user: {
      type: ObjectId,
      ref: "User"
    }

  },

  { timestamps: true }
);

export default mongoose.model('Address', addreeSchema);

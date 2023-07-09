import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    phone: {
      type: String,
    },
    profileImage: {
      type: String,
      default:
        'https://firebasestorage.googleapis.com/v0/b/artgram-project.appspot.com/o/default%20avatar.png?alt=media&token=5822996f-6951-4268-aa57-a6aa5081b156',
      },
    isWorker: {
      type: Boolean,
      default: false
    },
    pin: {
      type: Number,
    }
  },

  { timestamps: true }
);

export default mongoose.model('User', userSchema);

import { Schema, model, Document } from 'mongoose';
import { UserStatus } from '../constants/app.contant';
import { encrypt } from '../utils/utils';

interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  profileImage?: string;
  status: UserStatus;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      default: UserStatus.ACTIVE,
      enum: Object.values(UserStatus),
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    strict: 'throw',
    timestamps: true,
  }
);

// Create indexes
UserSchema.index({ status: 1 });

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await encrypt(this.password);
  next();
});

const User = model<IUser>('User', UserSchema);

export default User;

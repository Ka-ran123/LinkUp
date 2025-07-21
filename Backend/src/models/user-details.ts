import { Schema, model, Document } from 'mongoose';
import { Gender, UserStatus } from '../constants/app.contant';

interface IUserDetails extends Document {
  userId: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: Date;
  bio?: string;
  mobileNumber?: string;
  countryCode?: string;
  address?: string;
  state?: string;
  city?: string;
  country?: string;
  status: UserStatus;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserDetailsSchema = new Schema<IUserDetails>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: Object.values(Gender),
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    bio: {
      type: String,
      default: '',
    },
    mobileNumber: {
      type: String,
      unique: true,
      default: null,
    },
    countryCode: {
      type: String,
      default: null,
      match: /^\+\d{1,4}$/,
    },
    address: String,
    state: String,
    city: String,
    country: String,
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
UserDetailsSchema.index({ firstName: 'text', lastName: 'text', gender: 1, status: 1 });

const UserDetails = model<IUserDetails>('UserDetails', UserDetailsSchema);

export default UserDetails;

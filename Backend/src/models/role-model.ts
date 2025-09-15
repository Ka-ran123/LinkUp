import { Schema, model, Document } from 'mongoose';
import { Roles } from '../constants/app-contants';

interface IRole extends Document {
  userId: Schema.Types.ObjectId;
  roleName: Roles;
  createdAt?: Date;
  updatedAt?: Date;
}

const RoleSchema = new Schema<IRole>(
  {
    roleName: {
      type: String,
      required: true,
      enum: Object.values(Roles),
      default: Roles.USER,
    },
  },
  {
    strict: true,
    timestamps: true,
  }
);

const Role = model<IRole>('Role', RoleSchema);

export default Role;

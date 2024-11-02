import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  lastLogin?: Date;
  lastLogout?: Date;
  token: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastLogin: { type: Date },
  lastLogout: { type: Date },
  token: { type: String },
});

export default mongoose.model<IUser>("User", UserSchema);

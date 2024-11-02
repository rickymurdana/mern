import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  email: string;
  date: Date;
  description: string;
}

const TaskSchema: Schema = new Schema({
  email: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true }
});

export default mongoose.model<ITask>('Task', TaskSchema);

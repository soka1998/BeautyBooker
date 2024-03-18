import mongoose from "mongoose";
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: { type: String, required: true },
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  schedule: String,
  email: { type: String, required: true, unique: true },
  phone: String,
});

const Staff = mongoose.model('Staff', staffSchema);
export default Staff

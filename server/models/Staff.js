import mongoose from "mongoose";
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: { type: String, required: true },
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  schedule: String,
  email: { type: String, required: true, unique: true },
  phone: String,
});

module.exports = mongoose.model('Staff', staffSchema);

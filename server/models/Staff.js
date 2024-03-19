import mongoose from "mongoose";
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: { type: String, required: true },
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  schedule: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  // userid
  userId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique:true,
    required: true
}]
});

const Staff = mongoose.model('Staff', staffSchema);
export default Staff

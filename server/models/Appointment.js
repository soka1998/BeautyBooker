import mongoose from "mongoose";
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
  staffId: { type: Schema.Types.ObjectId, ref: 'Staff', required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Appointment', appointmentSchema);

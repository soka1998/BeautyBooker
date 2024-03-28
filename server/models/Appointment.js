import mongoose from "mongoose";
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: [true, 'Appointment date is required'],
    validate: {
      validator: function (value) {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today's date to midnight for comparison
        return value >= today;
      },
      message: 'Appointment date cannot be in the past',
    },
  }, // This closing brace was missing

  time: {
    type: String,
    required: [true, 'Appointment time is required'],
    match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter a valid time in HH:MM format'],
  },
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  serviceId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Service', 
    required: true 
  },
  staffId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Staff', 
    required: true 
  },
  status: {
    type: String,
    required: [true, 'Appointment status is required'],
    enum: {
      values: ['booked', 'completed', 'cancelled'],
      message: '{VALUE} is not a valid status for appointments',
    },
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;

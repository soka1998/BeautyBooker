import mongoose from "mongoose";
import  validator  from "validator";

const {isEmail}=validator;
const Schema = mongoose.Schema;


const staffSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Staff name is required'],
    trim: true,
    minlength: [3, 'Staff name must be at least 3 characters long']
  },
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  schedule: String,
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  phone: {
    type: String,
    // Optional: Validate phone number format if required
    match: [/^\+[1-9]\d{1,14}$/, 'Please fill a valid international phone number'], // Example regex for international phone numbers
  },
  availability: [{
    date: {
      type: Date,
      required: true
    },
    slots: [{
      startTime: String, // Example: "09:00"
      endTime: String, // Example: "17:00"
      isBooked: {
        type: Boolean,
        default: false
      }
    }]
  }],
  // userid
  userId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
    unique: true,

  }],

});

const Staff = mongoose.model('Staff', staffSchema);
export default Staff

import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Service name is required'],
    trim: true, 
    minlength: [3, 'Service name must be at least 3 characters long']
  },
  description: { 
    type: String,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  duration: { 
    type: Number,
    required: [true, 'Service duration is required'],
    min: [15, 'Minimum service duration is 15 minutes'],
    max: [480, 'Maximum service duration is 480 minutes']
  },
  price: {
    type: Number,
    required: [true, 'Service price is required'],
    min: [0, 'Service price cannot be negative']
  },
  availability: [{
    date: Date,
    timeSlots: [{
      start: String,
      end: String,
      isBooked: { type: Boolean, default: false }
    }]
  }]
});

const Service = mongoose.model('Service', serviceSchema);
export default Service;

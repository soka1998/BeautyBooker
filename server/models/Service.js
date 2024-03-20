import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String,
    required: [true, 'Service name is required'],
    trim: true, 
    minlength: [3, 'Service name must be at least 3 characters long'] },

  description: { 
    type: String,
    maxlength: [500, 'Description cannot exceed 500 characters'] // Optional: Limit description length}
  },
  duration: { 
    type: Number,
    required: [true, 'Service duration is required'],
    min: [15, 'Minimum service duration is 15 minutes'], // Assuming duration is in minutes
    max: [480, 'Maximum service duration is 480 minutes'] // Example constraint },
  },
  price: { type: Number,
    required: [true, 'Service price is required'],
    min: [0, 'Service price cannot be negative'] // Ensures price is not negative },
  }
});

const Service= mongoose.model('Service', serviceSchema);
export default Service;
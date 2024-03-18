import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Service= mongoose.model('Service', serviceSchema);
export default Service;
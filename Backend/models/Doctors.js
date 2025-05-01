const mongoose= require('mongoose');
const DoctorSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    experience: Number, // in years
    gender: String,
    location: String,
    rating: Number,
    consultationFee: Number,
    imageUrl: String
  },{timestamps:true});
  module.exports = mongoose.model('Doctor', DoctorSchema);
  
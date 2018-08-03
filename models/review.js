const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
	airport_name: String,
	link: String,
  title: String,
  author: String,
  author_country: String,
  date: Date,
  content: String,
  experience_airport: String,
  date_visit: String,	//	should be date, actually
  type_traveller: String,
  overall_rating: Number,
  queuing_rating: Number,
  terminal_cleanliness_rating: Number,
  terminal_seating_rating: Number,
  terminal_signs_rating: Number,
  food_beverages_rating: Number,
  airport_shopping_rating: Number,
  wifi_connectivity_rating: Number,
  airport_staff_rating: Number,
  recommended: Number 
});

module.exports = mongoose.model('Review', ReviewSchema);

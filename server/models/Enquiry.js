const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  message: { type: String, required: true },
  enquiry_type: { type: String, required: true },
  date: { type: Date, default: Date.now } // Automatically records when lead arrived
});

module.exports = mongoose.model('Enquiry', EnquirySchema);
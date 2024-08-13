const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    travelDestination: { type: String, required: true },
    dateOfTravel: { type: Date, required: true },
    noOfPeople: { type: Number, required: true },
    vacationType: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now },
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);
module.exports = Enquiry;

const mongoose = require('mongoose');
const StayConnectedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cityOfResidence: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    whatsapp: {
        type: String,
    },
    travelDestination: {
        type: String,
        required: true,
    },
    dateOfTravel: {
        type: Date,
        required: true,
    },
    numberOfPeople: {
        type: Number,
        required: true,
    },
    vacationType: {
        type: String,
        required: true,
    },
});

const StayConnected = mongoose.model('StayConnected', StayConnectedSchema);
module.exports = StayConnected;

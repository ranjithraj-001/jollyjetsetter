const express = require('express');
const router = express.Router();
const StayConnected = require('../models/StayConnected');
router.post('/submit', async (req, res) => {
    try {
        const newEntry = new StayConnected({
            name: req.body.name,
            cityOfResidence: req.body.cityOfResidence,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            whatsapp: req.body.whatsapp,
            travelDestination: req.body.travelDestination,
            dateOfTravel: req.body.dateOfTravel,
            numberOfPeople: req.body.numberOfPeople,
            vacationType: req.body.vacationType,
        });
        await newEntry.save();
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

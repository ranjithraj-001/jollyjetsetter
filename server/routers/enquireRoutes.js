const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// POST: Submit a new enquiry
router.post('/', async (req, res) => {
    try {
        const newEnquiry = new Enquiry(req.body);
        await newEnquiry.save();
        res.status(201).json({ message: 'Enquiry submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting enquiry', error });
    }
});

// GET: Retrieve all enquiries (for admin purposes)
router.get('/', async (req, res) => {
    try {
        const enquiries = await Enquiry.find();
        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving enquiries', error });
    }
});
// DELETE: Remove an enquiry
router.delete('/:id', async (req, res) => {
    try {
        await Enquiry.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Enquiry deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting enquiry', error });
    }
});

// PUT: Update an existing enquiry
router.put('/:id', async (req, res) => {
    try {
        const updatedEnquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedEnquiry);
    } catch (error) {
        res.status(500).json({ message: 'Error updating enquiry', error });
    }
});


module.exports = router;

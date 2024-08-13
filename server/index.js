const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Import routes
const contactRoutes = require('./routers/contactRoutes');
const stayConnectedRoutes = require('./routers/stayConnectedRoutes');
const enquireRoutes = require('./routers/enquireRoutes'); // Import the enquire routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/contactmodel', contactRoutes);
app.use('/api/stay-connected', stayConnectedRoutes);
app.use('/api/enquire', enquireRoutes);  // Use the enquire routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

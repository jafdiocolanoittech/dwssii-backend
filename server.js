require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// THIS LINE CONNECTS THE API ROUTE:
app.use('/api/activities', require('./routes/activityRoutes'));

// Basic route
app.get('/', (req, res) => {
    res.send('DWSSII Backend API is running!');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connected Successfully');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('MongoDB Connection Error:', err.message);
    });
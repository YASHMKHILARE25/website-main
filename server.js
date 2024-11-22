
// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const path = require('path');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb+srv://khilareyash124:yash123@yash.8xvmo.mongodb.net/?retryWrites=true&w=majority&appName=Yash", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Fallback route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

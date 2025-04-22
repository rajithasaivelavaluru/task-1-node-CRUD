const express = require('express');
const app = express();
const userRoute = require('./Routes/user.route.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// middleware to convert the json
app.use(express.json());

// API routes
app.use("/api/users", userRoute);

// Test route
app.get('/', (req, res) => {
    res.send('This is the response from a Node API which is updated');
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Connection Failed!', err);
  });

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import EmployeeRoutes from './routes/EmployeeRoutes.js'; // Use import for ES module
import connectToDatabase from './db/db.js';

// Load environment variables
dotenv.config();

// Connect to the database
connectToDatabase();

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Handles JSON payloads

// Routes
app.use('/api/auth', authRouter); // Authentication routes
app.use('/api/employees', EmployeeRoutes); // Employee management routes

// Start the server
const PORT = process.env.PORT || 8080; // Default to 8080 if not specified
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

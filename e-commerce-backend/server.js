// Core/NPM Modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Local Modules
const connectDB = require('./config/database');
const userRouter = require('./routes/userRouter');
const promptRouter = require('./routes/promptRouter');
const productRouter = require('./routes/productRouter');
const cartRouter = require('./routes/CartRouter');

const app = express();

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const PORT = process.env.PORT || 8000;

// Core Middleware
app.use(express.json());
app.use(cors());

// API Routes - It's good practice to version your API
app.use('/user', userRouter);
app.use('/cart', cartRouter);
app.use('/ai', promptRouter);
app.use('/product', productRouter);

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`);
});
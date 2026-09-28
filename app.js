const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

const app = express();

// Cho phép API nhận dữ liệu JSON
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK'
  });
});

// Routes của Product
app.use('/products', productRoutes);

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');

    app.listen(process.env.PORT, () => {
      console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });
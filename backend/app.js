const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

const products = require('./routes/productRouter');
const order = require('./routes/orderRouter');

connectDatabase();

app.use(express.json())
// Prefix URL path
app.use('/api/v1', products);
app.use('/api/v1', order);

app.listen(process.env.PORT, () => {
    console.log(`Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})
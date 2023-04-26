const express = require('express');
const cors = require('cors');

const bankRouter = require('../routers/bank');
const landRouter = require('../routers/landTitle');
const userRouter = require('../routers/user.js');
const userbankRouter = require('../routers/userHasbank.js');

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/bank', bankRouter);
app.use('/api/land', landRouter);
app.use('/api/user', userRouter);
app.use('/api/userbank', userbankRouter);

module.exports = app;

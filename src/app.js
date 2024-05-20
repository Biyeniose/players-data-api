const express = require('express');
const cors = require('cors');

const router = require('./routes/player');


const app = express();
const port = 3000;
// middlewares
app.use(cors())
app.use(express.json()); // Middleware to parse JSON
app.use(express.urlencoded({ extended: true }))

app.use('/v1', router)

app.get('*', (req, res) => {
    console.log(`Received request for: ${req.originalUrl}`)
    res.status(404).send('Not Found')
})
  
module.exports = app;

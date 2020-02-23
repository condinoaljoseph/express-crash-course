const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// initialize middleware
// app.use(logger);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// members router
app.use('/api/members', require('./routes/api/members'));

// set port to the variable or 5000
const PORT = process.env.PORT || 5000;

// listen to run on the server
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

// initialize middleware
// app.use(logger);

// handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set a static folder
// app.use(express.static(path.join(__dirname, 'public')));

// home page route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Members App',
    members
  })
);

// members router
app.use('/api/members', require('./routes/api/members'));

// set port to the variable or 5000
const PORT = process.env.PORT || 5000;

// listen to run on the server
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

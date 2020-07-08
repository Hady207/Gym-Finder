require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const GymRoutes = require('./routes/GymRoutes');
const ReviewRoutes = require('./routes/ReviewRoute');
const UserRoutes = require('./routes/UserRoutes');

const PORT = process.env.PORT || 5000;

const app = express();

// middleware pipeline start here
app.use(express.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Database Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.log(err.message));

// API Routes
app.use('/api/v1/gyms', GymRoutes);
// app.use('/api/v1/reviews', ReviewRoutes);
// app.use('/api/v1/user', UserRoutes);

// React specific
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

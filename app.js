require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

// middleware pipeline start here
app.use(express.json());

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.log(err.message));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

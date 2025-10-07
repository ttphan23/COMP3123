const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const noteRoutes = require('./routes/NoteRoutes');

const DB_URL = process.env.DB_URL || "";
const PORT = process.env.PORT || 8081;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.use('/api', noteRoutes);

console.log("DB_URL from .env:", `"${DB_URL}"`);
mongoose.connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Could not connect to MongoDB. Exiting...', err);
    process.exit(1);
  });

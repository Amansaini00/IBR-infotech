// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const questionnaireRoutes = require('./routes/questionnaire');

const app = express();
const port = 8080;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/questionnaireDB',
 { useNewUrlParser: true,
   useUnifiedTopology: true 
});

// Routes
app.use('/api/questionnaire', questionnaireRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

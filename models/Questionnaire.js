// models/Questionnaire.js
const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
  name: String,
  photo: String
});

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);

module.exports = Questionnaire;

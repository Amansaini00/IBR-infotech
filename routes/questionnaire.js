// routes/questionnaire.js
const express = require('express');
const router = express.Router();
const Questionnaire = require('../models/Questionnaire');

router.post('/submit', async (req, res) => {
  const { name, photo } = req.body;

  try {
    const newQuestionnaire = new Questionnaire({ name, photo });
    await newQuestionnaire.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

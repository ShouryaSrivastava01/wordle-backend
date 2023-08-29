const mongoose = require('mongoose');

// Define a schema
const wordSchema = new mongoose.Schema({
 words: Object
});

// Create a model
const Words = mongoose.model('Words', wordSchema);

module.exports = Words;
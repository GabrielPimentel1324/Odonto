// backend/models/Value.js
const mongoose = require('mongoose');

const ValueSchema = new mongoose.Schema({
    value: { type: String, required: true }
});

module.exports = mongoose.model('Value', ValueSchema);

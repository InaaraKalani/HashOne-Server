const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema({
    TopicName: { type: String },
}, { timestamps: true })

module.exports = mongoose.model('Topic', TopicSchema);
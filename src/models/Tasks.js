const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    topicId: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
    task: { type: String },
    due: { type: Date },
    isFinished: { type: Boolean, default: false },
    subTasks: { type: Array }

}, { timestamps: true })

module.exports = mongoose.model('Task', TaskSchema);
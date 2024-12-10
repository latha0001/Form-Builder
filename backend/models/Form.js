const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    type: String,
    text: String,
    options: [String],
});

const FormSchema = new mongoose.Schema({
    title: String,
    questions: [QuestionSchema],
});

module.exports = mongoose.model("Form", FormSchema);

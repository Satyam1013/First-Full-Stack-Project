const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: String,
  description: String,
  subject: String,
  id: String
});

const NoteModel = mongoose.model("note", noteSchema);

module.exports = { NoteModel };

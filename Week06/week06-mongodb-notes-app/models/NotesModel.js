const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const PRIORITIES = ['HIGH', 'MEDIUM', 'LOW'];

const NoteSchema = new mongoose.Schema(
  {
    noteTitle: {
      type: String,
      required: [true, 'noteTitle is required'],
      trim: true,
      maxlength: 200
    },
    noteDescription: {
      type: String,
      required: [true, 'noteDescription is required'],
      trim: true
    },
    priority: {
      type: String,
      enum: PRIORITIES,
      default: 'LOW'
    },
    dateAdded: {
      type: String,
      required: true
    },
    dateUpdated: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model('Note', NoteSchema);
const express = require('express');
const mongoose = require('mongoose');
const Note = require('../models/NotesModel');

const noteRoutes = express.Router();

function payload(req) {
  return req.body?.content ? req.body.content : req.body;
}

// CREATE
noteRoutes.post('/notes', async (req, res) => {
  try {
    const data = payload(req);
    if (!data || !data.noteTitle || !data.noteDescription || !data.dateAdded || !data.dateUpdated) {
      return res.status(400).json({ message: 'Missing required fields (noteTitle, noteDescription, dateAdded, dateUpdated).' });
    }
    const note = await Note.create({
      noteTitle: data.noteTitle,
      noteDescription: data.noteDescription,
      priority: data.priority || 'LOW',
      dateAdded: data.dateAdded,
      dateUpdated: data.dateUpdated
    });
    return res.status(201).json(note);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to create note', error: err.message });
  }
});

// GET all
noteRoutes.get('/notes', async (_req, res) => {
  try {
    const notes = await Note.find().sort({ dateUpdated: -1 });
    return res.json(notes);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to retrieve notes', error: err.message });
  }
});

// GET ID
noteRoutes.get('/notes/:noteId', async (req, res) => {
  try {
    const { noteId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(noteId)) {
      return res.status(400).json({ message: 'Invalid noteId' });
    }
    const note = await Note.findById(noteId);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    return res.json(note);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to retrieve note', error: err.message });
  }
});

// UPDATE
noteRoutes.put('/notes/:noteId', async (req, res) => {
  try {
    const { noteId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(noteId)) {
      return res.status(400).json({ message: 'Invalid noteId' });
    }
    const data = payload(req);
    if (!data) {
      return res.status(400).json({ message: 'No payload provided' });
    }

    const update = {
      ...(data.noteTitle !== undefined && { noteTitle: data.noteTitle }),
      ...(data.noteDescription !== undefined && { noteDescription: data.noteDescription }),
      ...(data.priority !== undefined && { priority: data.priority }),
      ...(data.dateAdded !== undefined && { dateAdded: data.dateAdded }),
      dateUpdated: data.dateUpdated || new Date().toLocaleDateString('en-CA', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    const note = await Note.findByIdAndUpdate(noteId, update, { new: true, runValidators: true });
    if (!note) return res.status(404).json({ message: 'Note not found' });
    return res.json(note);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to update note', error: err.message });
  }
});

// DELETE
noteRoutes.delete('/notes/:noteId', async (req, res) => {
  try {
    const { noteId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(noteId)) {
      return res.status(400).json({ message: 'Invalid noteId' });
    }
    const note = await Note.findByIdAndDelete(noteId);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    return res.json({ message: 'Note deleted', id: note._id });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to delete note', error: err.message });
  }
});

module.exports = noteRoutes;

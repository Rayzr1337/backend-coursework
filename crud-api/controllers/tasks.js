const Task = require('../models/task');

function index(req, res) {
  res.json(Task.getAll());
}

function show(req, res) {
  const id = Number(req.params.id);
  const task = Task.getById(id);
  if (!task) return res.status(404).json({ error: `Task ${id} does not exist` });
  res.json(task);
}

function add(req, res) {
  if (!req.body || !req.body.title) {
    return res.status(400).json({ error: 'Task title is required' });
  }
  const task = Task.create(req.body);
  res.status(201).json(task);
}

function update(req, res) {
  const id = Number(req.params.id);
  const task = Task.getById(id);
  if (!task) return res.status(404).json({ error: `Task ${id} does not exist` });

  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    return res.status(400).json({ error: 'Request body must be a JSON object' });
  }

  const { title, description, completed } = req.body;

  if (title !== undefined && (typeof title !== 'string' || !title.trim())) {
    return res.status(400).json({ error: 'Title must be a non-empty string' });
  }
  if (description !== undefined && typeof description !== 'string') {
    return res.status(400).json({ error: 'Description must be a string' });
  }
  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Completed must be a boolean' });
  }

  if (title === undefined && description === undefined && completed === undefined) {
    return res.status(400).json({ error: 'No valid fields to update (title, description, completed)' });
  }

  const updatedTask = Task.update(id, { title, description, completed });
  res.json(updatedTask);
}

module.exports = { index, show, add, update };

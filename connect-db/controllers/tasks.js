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

  const { title, completed } = req.body;

  if (title !== undefined && (typeof title !== 'string' || !title.trim())) {
    return res.status(400).json({ error: 'Title must be a non-empty string' });
  }
  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Completed must be a boolean' });
  }

  if (title === undefined && completed === undefined) {
    return res.status(400).json({ error: 'No valid fields to update (title, completed)' });
  }

  const updatedTask = Task.update(id, { title, completed });
  res.json(updatedTask);
}

function destroy(req, res) {
  const id = Number(req.params.id);
  const ok = Task.remove(id);
  if (!ok) return res.status(404).json({ error: `Task ${id} does not exist` });
  res.status(204).send();
}

module.exports = { index, show, add, update, destroy };

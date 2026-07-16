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

module.exports = { index, show, add };

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

module.exports = { index, show };

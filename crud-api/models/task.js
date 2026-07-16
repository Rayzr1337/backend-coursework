let tasks = [];
let nextId = 1;

function getAll() {
  return tasks;
}

function getById(id) {
  return tasks.find(t => t.id === id) || null;
}

module.exports = { getAll, getById };

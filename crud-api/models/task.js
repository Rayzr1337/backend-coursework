let tasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Walk the dog', completed: true },
  { id: 3, title: 'Write code', completed: false },
];
let nextId = 4;

function getAll() {
  return tasks;
}

function getById(id) {
  return tasks.find(t => t.id === id) || null;
}

function create(data) {
  const task = {
    id: nextId++,
    title: data.title,
    description: data.description || '',
    completed: data.completed || false,
  };
  tasks.push(task);
  return task;
}

module.exports = { getAll, getById, create };

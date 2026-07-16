let tasks = [
  { id: 1, title: 'Buy groceries', description: 'Milk, eggs, bread', completed: false },
  { id: 2, title: 'Walk the dog', description: 'Around the park', completed: true },
  { id: 3, title: 'Write code', description: 'Finish CRUD API', completed: false },
];
let nextId = 4;

function getAll() {
  return tasks;
}

function getById(id) {
  return tasks.find(t => t.id === id) || null;
}

module.exports = { getAll, getById };

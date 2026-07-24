const db = require('./db.js');
let nextId = 4;


function getAll() {
    const tasks = db.prepare('SELECT * FROM tasks').all();
    return tasks.map(t => ({ id: t.id, title: t.title, completed: Boolean(t.done) }));
}

function getById(id) {
  const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
  if (!task) return null;
  return { id: task.id, title: task.title, completed: Boolean(task.done) };
}


module.exports = { getAll, getById  };

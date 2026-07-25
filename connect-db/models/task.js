const db = require('./db.js');

function getAll() {
    const tasks = db.prepare('SELECT * FROM tasks').all();
    return tasks.map(t => ({ id: t.id, title: t.title, completed: Boolean(t.done) }));
}

function getById(id) {
  const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
  if (!task) return null;
  return { id: task.id, title: task.title, completed: Boolean(task.done) };
}

function create(data) {
  const result = db.prepare('INSERT INTO tasks (title, done) VALUES (?, ?)').run(data.title, data.completed ? 1 : 0);
  
  return {
    id: Number(result.lastInsertRowid),
    title: data.title,
    completed: Boolean(data.completed)
  };
}

function update(id, data) {
  db.prepare('UPDATE tasks SET title = ?, done = ? WHERE id = ?').run(data.title, data.completed ? 1 : 0, id);

  return {
    id,
    title: data.title,
    completed: Boolean(data.completed)
  };
}

function remove(id) {
    const result = db.prepare('DELETE FROM tasks WHERE id = ?').run(id);
    return result.changes > 0;
}


module.exports = { getAll, getById, create, update, remove };

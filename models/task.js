const { pool } = require("./db");

async function getAll() {
    const result = await pool.query("SELECT * FROM tasks");

    return result.rows.map(t => ({
        id: t.id,
        title: t.title,
        completed: t.done
    }));
}

async function getById(id) {
    const result = await pool.query(
        "SELECT * FROM tasks WHERE id = $1",
        [id]
    );

    if (result.rows.length === 0) return null;

    const task = result.rows[0];

    return {
        id: task.id,
        title: task.title,
        completed: task.done
    };
}

async function create(data) {
    const result = await pool.query(
        `INSERT INTO tasks (title, done)
         VALUES ($1, $2)
         RETURNING *`,
        [data.title, data.completed]
    );

    const task = result.rows[0];

    return {
        id: task.id,
        title: task.title,
        completed: task.done
    };
}

async function update(id, data) {
    const result = await pool.query(
        `UPDATE tasks
         SET title = $1, done = $2
         WHERE id = $3
         RETURNING *`,
        [data.title, data.completed, id]
    );

    if (result.rows.length === 0) return null;

    const task = result.rows[0];

    return {
        id: task.id,
        title: task.title,
        completed: task.done
    };
}

async function remove(id) {
    const result = await pool.query(
        "DELETE FROM tasks WHERE id = $1",
        [id]
    );

    return result.rowCount > 0;
}

module.exports = { getAll, getById, create, update, remove };

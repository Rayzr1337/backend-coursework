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

function create(data) {
    // Stage 3
}

function update(id, data) {
    // Stage 3
}

function remove(id) {
    // Stage 3
}

module.exports = { getAll, getById, create, update, remove };

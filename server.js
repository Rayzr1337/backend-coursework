const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const taskRoutes = require('./routes/tasks');
const Database = require('better-sqlite3');

const db = new Database('tasks.db');

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    done INTEGER NOT NULL DEFAULT 0
  )
`);

const countStmt = db.prepare('SELECT COUNT(*) AS count FROM tasks');
const { count } = countStmt.get();

if (count === 0) {
  const insertSeed = db.prepare('INSERT INTO tasks (title, done) VALUES (?, ?)');
  
  const seedTransaction = db.transaction(() => {
    insertSeed.run('Learn SQLite', 0);
    insertSeed.run('Connect Express to better-sqlite3', 0);
    insertSeed.run('Complete Week 3 Assignment', 0);
  });
  
  seedTransaction();
}

const app = express();
app.use(express.json());

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'Tasks API', version: '1.0.0' },
  },
  apis: ['./routes/*.js'],
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/status', (req, res) => {
    res.json({ status: 'online' });
});

app.use('/tasks', taskRoutes);

app.listen(3000, () => { console.log('Listening on port 3000..') });

require('dotenv').config();
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const taskRoutes = require('./routes/tasks');
const { initializeDatabase } = require("./models/db");


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

(async () => {
    try {
        await initializeDatabase();

        app.listen(3000, () => {
            console.log(`Server listening on port 3000`);
        });
    } catch (err) {
        console.error("Failed to initialize database:", err);
        process.exit(1);
    }
})();




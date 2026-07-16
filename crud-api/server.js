const express = require('express');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'online' });
});

app.use('/tasks', taskRoutes);

app.listen(3000, () => { console.log('Listening on port 3000..') });

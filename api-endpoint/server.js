const express = require('express');

const app = express();
app.use(express.json());

app.get('/status', (req, res) => {
    res.json({
        status: 'online'
    });
});

app.get('/hello', (req, res) => {
    res.json({
        message: 'Hello from API!'
    });
});


app.listen(3000, () => { console.log('Listening on port 3000..') });

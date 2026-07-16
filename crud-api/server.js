const express = require('express');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({
        status: 'online'
    });
});

app.get('/', (req, res) => {
    res.json({ 
        name: "Task API", 
        version: "1.0", 
        endpoints: ["/tasks"] 
    });
});


app.listen(3000, () => { console.log('Listening on port 3000..') });

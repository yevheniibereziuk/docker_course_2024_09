const express = require('express');

const app = express();

const HOST = '0.0.0.0';
const PORT = 80;


app.get('/', (req, res) => {
    res.json({
        players: ['Billy', 'Kate', 'Yevhenii', 'John', 'Sarah', 'Emma', 'Bob', 'Michell', 'Joe']
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

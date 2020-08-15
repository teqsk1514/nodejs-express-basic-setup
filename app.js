const express = require('express');
const app = express();

const serverPort = process.env.port || 5000

app.get('/', (req, res) => {
    res.send("Basic Express Setup");
});

app.get('/help', (req, res) => {
    res.send('Help Route')
})

app.get('/notFound', (req, res) => {
    res.send('Not Found Route')
})

app.get('/login', (req, res) => {
    res.send('User Login Route')
})

app.get('/userProfile', (req, res) => {
    res.send('Profile Route')
})

app.listen(serverPort);
console.log('Server is listening at port ' + (serverPort));
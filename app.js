const express = require('express');
const app = express();

const serverPort = process.env.port || 5000

app.get('/', (req, res) => {
    res.send("Basic Express Setup");
});

app.listen(serverPort);
console.log('Server is listening at port ' + (serverPort));
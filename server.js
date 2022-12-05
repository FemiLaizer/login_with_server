const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username}, Password: ${password}`);
});

app.listen(port, console.log(`Server is listening on port ${port}`));
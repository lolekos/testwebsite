var express = require('express');
var app = express();
var pretty = require('express-prettify');

var port = 3000;
var users = [
    {
        "firstName": 'Norbert',
        "lastName":  'Jungto'
    }
];

app.use(pretty({ query: 'p' }));

app.get('/', (req, res) => { 
    res.send('Hello World');
});

app.get('/getUsers', getUsers);
app.get('/createUser',  function(req, res) {
    users.push({
        "firstName": req.query.firstName,
        "lastName":  req.query.lastName
    });

    res.status(200).end();
});

app.listen(port, function() {
    console.log(`Server is listening on port: ${port}`);
});

function wait(time, callback) {
    setTimeout(() => {
        callback();
    }, time * 1000);
}

function getUsers(req, res) {
    res.json(users);
}
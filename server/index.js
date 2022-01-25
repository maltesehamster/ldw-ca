const db = require('./db');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.listen(process.env.PORT, () => {
    console.log('Server is up on port ' + process.env.PORT + '!');
 });

app.get('/users', function(req, res) {
    res.set('Content-Type', 'application/json');

    db.getUsers()
        .then(function (users) {
            res.status(200).json(users);
        })
        .catch(function (err) {
            console.log("Unable to fetch a list of users from the database: " + err);
            res.status(400).json('Unable to fetch list of users.');
        });
});

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

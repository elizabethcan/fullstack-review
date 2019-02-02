const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const saveToDb = require('../database/index').save;
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.text());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  getReposByUsername(req.body, (err, data) => {
    // console.log(`THIS IS THE DATA0 NAME: `, data);
    saveToDb(data);
  });
  res.status(201).send(req.body);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // res.status(200).send(console.log(res));
  res.status(200).send('GET request sent');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


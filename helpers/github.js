const request = require('request');
const config = require('../config.js');

// GET /users/:username/repos - lists all repos for user
// URL should be base URL plus /users/{username}/repos

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  }
  request(options, (err, res, body) => {
    var parsedBody = JSON.parse(body);
    if (err) {
      callback(err);
    } else {
      callback(null, parsedBody);
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;
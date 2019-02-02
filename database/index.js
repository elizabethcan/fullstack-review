const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  hmtl_url: String,
  stargazers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);
// makes a copy of schema


let save = (repoArr) => {
  var repositories = repoArr.map((repo) => {
    return (
      {
        id: repo.id,
        name: repo.name,
        hmtl_url: repo.html_url,
        stargazers_count: repo.stargazers_count
      }
    );
  });
  console.log(`repositories: `, repositories);
  for (var i = 0; i < repositories.length; i++) {
    Repo.create(repositories[i]);
  }
}

var runQuery = (callback) => {
  Repo.find().exec(callback);
}

module.exports.save = save;
module.exports.runQuery = runQuery;

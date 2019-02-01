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
  // we will call save on Repo, passing in the array that we get as a response from the github api GET request
  // we want to map this array into a new array that contains objects with only the fields we want
  var repoInfo = repoArr.map((repo) => {
    return (
      {
        id,
        name,
        hmtl_url,
        stargazers_count
      }
    );
  });
  // then we want to save each object from this array into Repo
  Repo.insertMany(repoInfo);
}

module.exports.save = save;
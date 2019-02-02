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
  // console.log(`repoArr[0] id: `, repoArr[0].id);
  // console.log(`repoArr[0] name: `, repoArr[0].name);
  // console.log(`repoArr[0] html_url: `, repoArr[0].html_url);
  console.log(`repoArr[0] stargazers_count: `, repoArr[0].stargazers_count);
  var repositories = repoArr.map((repo) => {
    // console.log(`repo: `, repo);
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
  // then we want to save each object from this array into Repo
  // for each item in the repositories array
  for (var i = 0; i < repositories.length; i++) {
    // if Repo.find(item.id) is false
    // if (!(Repo.findById(repositories[i].id))) {
      // Repo.create item
      Repo.create(repositories[i]);
    // }
  }
}

module.exports.save = save;
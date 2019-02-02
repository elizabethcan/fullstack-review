import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoDisplay from './components/RepoDisplay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  componentDidMount() {
    $.get("http://localhost:1128/repos", (data) => {
      console.log(data);
      this.setState({
        repos: data
      });
    });
  }

  search(term) {
    console.log(`${term} was searched`);
    // this should send post request to server
    $.ajax({
      url: "http://localhost:1128/repos",
      method: "POST",
      contentType: "text/plain",
      data: term,
      success: ((data) => {console.log(data)}),
      error: ((err) => {console.log(err)})
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
      <RepoDisplay repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';

function RepoDisplay(props) {
  return (
    <table>
      <tr>
        <th>Stars:</th>
        <th>Name:</th>
        <th>URL:</th>
      </tr>
      {props.repos.map((repo) => {
        return (
          <tr>
            <td>{repo.stargazers_count}</td>
            <td>{repo.name}</td>
            <td>{repo.hmtl_url}</td>
          </tr> )
      })}
    </table>
  );
};

export default RepoDisplay;
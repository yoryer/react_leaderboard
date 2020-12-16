import React from 'react';

const Table = ({data}) => (
  <div>
    <table className="table table-striped" data-testid="leaderboard-table">
      <thead>
        <tr key="head">
          <th>Age</th>
          <th>Name</th>
          <th>Points</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.name}>
            <td>{user.age}</td>
            <td>{user.name}</td>
            <td>{user.points}</td>
            <td>{user.rank}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;

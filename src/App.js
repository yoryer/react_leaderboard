import React, { Component } from 'react';
import orderBy from 'lodash/orderBy';

import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';
import usersJSON from './data.json';

export default class App extends Component {
  state = {
    users: usersJSON,
    columnToSort: '',
    sortDirection: 1,
  };

  handleSort = (columnName) => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection: state.columnToSort === columnName ? state.sortDirection * -1 : 1,
    }));
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age handleSort={this.handleSort} columnToSort={this.state.columnToSort} sortDirection={this.state.sortDirection} />
          <Name handleSort={this.handleSort} columnToSort={this.state.columnToSort} sortDirection={this.state.sortDirection} />
          <Points handleSort={this.handleSort} columnToSort={this.state.columnToSort} sortDirection={this.state.sortDirection} />
          <Rank handleSort={this.handleSort} columnToSort={this.state.columnToSort} sortDirection={this.state.sortDirection} />
          <Table data={orderBy(this.state.users, this.state.columnToSort, this.state.sortDirection === 1 ? 'asc' : 'desc',)} />
        </div>
      </div>
    );
  }
}

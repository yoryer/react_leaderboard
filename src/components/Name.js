import React from 'react';

const Name = ({handleSort, columnToSort, sortDirection}) => (
  <button className="btn btn-primary name" name="name" onClick={() => handleSort('name')}>
    Name
    {columnToSort === 'name' ? (sortDirection === 1 ? ' \u2191' : ' \u2193') : null}
  </button>
);

export default Name;

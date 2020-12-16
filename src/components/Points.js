import React from 'react';

const Points = ({handleSort, columnToSort, sortDirection}) => (
  <button className="btn btn-primary points" name="points" onClick={() => handleSort('points')}>
    Points
    {columnToSort === 'points' ? (sortDirection === 1 ? ' \u2191' : ' \u2193') : null}
  </button>
);

export default Points;

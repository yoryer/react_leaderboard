import React from 'react';

const Rank = ({handleSort, columnToSort, sortDirection}) => (
  <button className="btn btn-primary rank" name="rank" onClick={() => handleSort('rank')}>
    Rank
    {columnToSort === 'rank' ? (sortDirection === 1 ? ' \u2191' : ' \u2193') : null}
  </button>
);

export default Rank;

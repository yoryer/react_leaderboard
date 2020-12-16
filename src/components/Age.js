import React from 'react';

const Age = ({handleSort, columnToSort, sortDirection}) => (

  <button className="btn btn-primary age" name="age" onClick={() => handleSort('age')}>
    Age
    {columnToSort === 'age' ? (sortDirection === 1 ? ' \u2191' : ' \u2193') : null}
  </button>
);

export default Age;

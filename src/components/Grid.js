import React from 'react';

const Grid = props => {
  const grid = props.grid.map(gridRow => gridRow.map(gridItem => gridItem));

  return (
    <div style={{ width: props.width }} className="grid">
      {grid}
    </div>
  );
};

export default Grid;

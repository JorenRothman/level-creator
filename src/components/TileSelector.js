import React from 'react';

const TileSelector = props => {
  return (
    <div className="tile-selector">
      <ul>
        <li>
          <button onClick={() => props.selectTile(-1)}>Air</button>
        </li>
        <li>
          <button onClick={() => props.selectTile(0)}>Grass</button>
        </li>
        <li>
          <button onClick={() => props.selectTile(1)}>Ground</button>
        </li>
      </ul>
    </div>
  );
};

export default TileSelector;

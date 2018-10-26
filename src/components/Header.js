import React from 'react';

const header = props => {
  return (
    <header>
      <button onClick={props.save}>Save</button>
      <label>
        Level name:
        <input type="text" value={props.fileName} onChange={props.onChange} />
      </label>
    </header>
  );
};

export default header;

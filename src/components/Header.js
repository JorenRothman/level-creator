import React from 'react';

const header = props => {
  return (
    <header>
      <button onClick={props.save}>Save</button>
      <label>
        Level index:
        <input
          type="text"
          placeholder="1"
          value={props.levelIndex}
          onChange={props.onChange}
        />
      </label>
      <label>
        Load level:
        <input id="file" type="file" onChange={props.fileUpload} />
      </label>
    </header>
  );
};

export default header;

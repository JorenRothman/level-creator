import React, { Component } from 'react';

class GridTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: props.x,
      y: props.y,
      tileData: props.tileData,
    };

    this.tileClick = this.tileClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tileData !== this.props.tileData) {
      this.setState({
        tileData: this.props.tileData,
      });
    }
  }

  tileClick() {
    const { x, y, tileData } = this.state;

    console.log(this.props.currentTile);

    this.setState({
      tileData: this.props.currentTile,
    });

    this.props.onChange(x, y, this.props.currentTile);
  }

  changeColor() {
    const { tileData } = this.state;
    let color = 'blue';

    if (tileData === 0) {
      color = 'green';
    }

    if (tileData === 1) {
      color = 'brown';
    }

    return {
      backgroundColor: color,
    };
  }

  render() {
    const { tileData } = this.state;

    return (
      <div
        data-id={tileData}
        style={this.changeColor()}
        className="tile"
        onClick={this.tileClick}
      >
        Data:
        {tileData}
      </div>
    );
  }
}

export default GridTile;

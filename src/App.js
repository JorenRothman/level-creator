import React, { Component } from 'react';
import FileSaver from 'file-saver';
import Header from './components/Header';
import Grid from './components/Grid';
import GridTile from './components/GridTile';
import TileSelector from './components/TileSelector';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      worldWidth: 2400,
      worldHeight: 800,
      grid: [],
      currentTile: -1,
      levelName: '',
    };

    this.saveLayout = this.saveLayout.bind(this);
    this.changeCurrentTile = this.changeCurrentTile.bind(this);
    this.changeLevelName = this.changeLevelName.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentTile !== this.state.currentTile) {
      this.createGrid();
    }
  }

  componentDidMount() {
    this.createGrid();
  }

  changeCurrentTile(tileNumber) {
    this.setState({
      currentTile: tileNumber,
    });
  }

  saveLayout() {
    const { grid, levelName } = this.state;
    const layout = [];
    let counter = 0;

    if (levelName === '') {
      return;
    }

    const tiles = document.querySelectorAll('.tile');

    for (let i = 0; i < grid.length; i++) {
      layout[i] = [];
      for (let j = 0; j < grid[i].length; j++) {
        layout[i].push(parseInt(tiles[counter].getAttribute('data-id')));
        counter++;
      }
    }
    const json = JSON.stringify(layout);
    console.log(json);

    const jsonWithKey = JSON.stringify({
      level: layout,
    });

    const blob = new Blob([jsonWithKey], { type: 'application/json' });
    FileSaver.saveAs(blob, `${levelName}.json`);
  }

  createGrid() {
    const { worldWidth, worldHeight, currentTile } = this.state;
    const tileCountX = worldWidth / 50;
    const tileCountY = worldHeight / 50;

    const grid = [];

    for (let i = 0; i < tileCountY; i++) {
      grid[i] = [];
      for (let j = 0; j < tileCountX; j++) {
        grid[i].push(
          <GridTile
            key={`${i}${j}`}
            currentTile={this.state.currentTile}
            x={j}
            y={i}
          />
        );
      }
    }

    this.setState({
      grid,
    });
  }

  changeLevelName(event) {
    const { value } = event.target;

    this.setState({
      levelName: value,
    });
  }

  render() {
    const { worldWidth, grid, levelName } = this.state;
    return (
      <div className="App">
        <Header
          levelName={levelName}
          onChange={this.changeLevelName}
          save={this.saveLayout}
        />
        <Grid grid={grid} width={worldWidth} />
        <TileSelector selectTile={this.changeCurrentTile} />
      </div>
    );
  }
}

export default App;

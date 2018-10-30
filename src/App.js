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
      gridItems: [],
      currentTile: -1,
      levelIndex: '',
    };

    this.saveLayout = this.saveLayout.bind(this);
    this.changeCurrentTile = this.changeCurrentTile.bind(this);
    this.changeLevelIndex = this.changeLevelIndex.bind(this);
    this.tileChanged = this.tileChanged.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.grid !== this.state.grid) {
      this.createGridItems();
    }
  }

  componentDidMount() {
    this.createGrid();
  }

  changeCurrentTile(tileNumber) {
    this.setState(
      {
        currentTile: tileNumber,
      },
      () => {
        this.createGridItems();
      }
    );
  }

  saveLayout() {
    const { grid, levelIndex } = this.state;

    if (levelIndex === '') {
      return;
    }

    const layout = grid.map(gridRow => gridRow.map(item => item.tileData));

    const jsonWithKey = JSON.stringify({
      level: layout,
    });

    const blob = new Blob([jsonWithKey], { type: 'application/json' });
    FileSaver.saveAs(blob, `level${levelIndex}.json`);
  }

  createGridItems() {
    const { grid } = this.state;
    const gridItems = [];
    for (let i = 0; i < grid.length; i++) {
      gridItems[i] = [];
      for (let j = 0; j < grid[i].length; j++) {
        const element = grid[i][j];
        gridItems[i].push(
          <GridTile
            key={`${element.position.x}${element.position.y}`}
            currentTile={this.state.currentTile}
            tileData={element.tileData}
            onChange={this.tileChanged}
            x={element.position.x}
            y={element.position.y}
          />
        );
      }
    }

    this.setState({
      gridItems,
    });
  }

  tileChanged(x, y, tileData) {
    const { grid } = this.state;

    grid[y][x].tileData = tileData;

    this.setState({
      grid,
    });
  }

  createGrid() {
    const { worldWidth, worldHeight, currentTile } = this.state;
    const tileCountX = worldWidth / 50;
    const tileCountY = worldHeight / 50;

    const grid = [];

    for (let i = 0; i < tileCountY; i++) {
      grid[i] = [];
      for (let j = 0; j < tileCountX; j++) {
        grid[i].push({
          position: { x: j, y: i },
          tileData: -1,
        });
      }
    }

    this.setState({
      grid,
    });
  }

  changeLevelIndex(event) {
    const { value } = event.target;

    this.setState({
      levelIndex: value,
    });
  }

  fileUpload(event) {
    const fileEl = document.getElementById('file');
    const file = fileEl.files[0];
    const fr = new FileReader();
    fr.readAsText(file);

    fr.addEventListener('load', () => {
      const json = JSON.parse(fr.result);
      this.fileUploadProcess(json.level);
    });
  }

  fileUploadProcess(json) {
    const grid = [];
    for (let i = 0; i < json.length; i++) {
      grid[i] = [];
      for (let j = 0; j < json[i].length; j++) {
        grid[i].push({
          position: { x: j, y: i },
          tileData: json[i][j],
        });
      }
    }

    this.setState({
      grid,
    });
  }

  render() {
    const { worldWidth, gridItems, levelIndex } = this.state;
    return (
      <div className="App">
        <Header
          levelIndex={levelIndex}
          onChange={this.changeLevelIndex}
          save={this.saveLayout}
          fileUpload={this.fileUpload}
        />
        <Grid grid={gridItems} width={worldWidth} />
        <TileSelector selectTile={this.changeCurrentTile} />
      </div>
    );
  }
}

export default App;

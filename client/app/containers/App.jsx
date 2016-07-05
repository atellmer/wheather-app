import React, { Component } from 'react';

import SearchBarContainer from './searchBarContainer';

import style from './App.styl';


class App extends Component {
  render() {
    return (
      <div class="container">
        <div className="z-depth-1 app-content">
          <div className="row">
            <SearchBarContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
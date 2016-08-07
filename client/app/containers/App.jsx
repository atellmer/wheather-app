import React, { Component } from 'react';

import SearchBarContainer from './search-bar-container';
import WeatherListContainer from './weather-list-container';


import style from './App.styl';


class App extends Component {
  render() {
    return (
      <div class="container">
        <div className="z-depth-1 app-content">
          <div className="row">
            <div className="col s12">
              <div className="logo"></div>
            </div>
          </div>
          <div className="row">
            <SearchBarContainer/>
            <WeatherListContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
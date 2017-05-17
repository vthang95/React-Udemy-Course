import React, { Component } from 'react';

import WeatherList from '../containers/WeatherList';
import SearchBar from '../containers/SearchBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

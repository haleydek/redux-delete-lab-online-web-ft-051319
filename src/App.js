import React, { Component } from 'react';
import BandInput from './components/BandInput';
import BandsContainer from './components/BandsContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BandInput />
        <BandsContainer />
      </div>
    );
  }
};

export default App;

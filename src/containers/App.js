import React, { Component } from 'react';
import Header from "../components/Header";
import WeightCalc from "../containers/WeightCalc";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WeightCalc />
      </div>
    );
  }
}

export default App;

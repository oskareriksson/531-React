import React, { Component } from 'react';
import Header from "../components/Header";
import LiftStats from "../containers/LiftStats";
import WeightCalc from "../containers/WeightCalc";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LiftStats />
        <WeightCalc />
      </div>
    );
  }
}

export default App;

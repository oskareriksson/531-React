import React, { Component } from 'react';
import {Container, Row} from "reactstrap";
import Header from "../components/Header";
import LiftStats from "../containers/LiftStats";
import WeightCalc from "../containers/WeightCalc";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <LiftStats title="Overhead press"/>
            <LiftStats title="Squat"/>
            <LiftStats title="Bench press"/>
            <LiftStats title="Deadlift"/>
          </Row>
        </Container>
        <WeightCalc />
      </div>
    );
  }
}

export default App;

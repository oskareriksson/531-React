import React, { Component } from 'react';
import {Container, Row} from "reactstrap";
import Header from "../components/Header";
import Exercise from "../containers/Exercise";
import WeightCalc from "../containers/WeightCalc";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Header />
          </Row>
        </Container>
        <Container>
          <Row>
            <Exercise title="Overhead press"/>
            <Exercise title="Squat"/>
            <Exercise title="Bench press"/>
            <Exercise title="Deadlift"/>
          </Row>
        </Container>
        <WeightCalc />
      </div>
    );
  }
}

export default App;

import React, {Component} from "react";
import {Col} from "reactstrap";

//Stateful component
class Exercise extends Component {
  render(){
    return(
      <Col xs="12" sm="6" md="3">
        <h2>{this.props.title}</h2>
      </Col>
    );
  }
}

export default Exercise;
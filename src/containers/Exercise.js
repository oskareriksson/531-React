import React, {Component} from "react";
import {Col, Form, FormGroup, Label, Input} from "reactstrap";

//Stateful component
class Exercise extends Component {
  render(){
    return(
      <Col xs="12" sm="6" md="3">
        <h2>{this.props.title}</h2>
        <Form>
          <FormGroup tag="fieldset">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Cycle 1
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Cycle 2
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Cycle 3
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
      </Col>
    );
  }
}

export default Exercise;
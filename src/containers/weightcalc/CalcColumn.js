import React, {Component} from "react";
import {Col, Form, FormGroup, Label, Input} from "reactstrap";

class CalcColumn extends Component {
  render(){
    return(
      <Col xs="6">
        <Form>
          <fieldset disabled>
            <FormGroup>
              <Label for={this.props.field1}>50% of 1RM</Label>
              <Input type="text" id={this.props.field1}/>
            </FormGroup>
            <FormGroup>
              <Label for={this.props.field2}>55% of 1RM</Label>
              <Input type="text" id={this.props.field2}/>
            </FormGroup>
            <FormGroup>
              <Label for={this.props.field3}>60% of 1RM</Label>
              <Input type="text" id={this.props.field3}/>
            </FormGroup>
            <FormGroup>
              <Label for={this.props.field4}>65% of 1RM</Label>
              <Input type="text" id={this.props.field4}/>
            </FormGroup>
            <FormGroup>
              <Label for={this.props.field5}>70% of 1RM</Label>
              <Input type="text" id={this.props.field5}/>
            </FormGroup>
          </fieldset>
        </Form>
      </Col>
    );
  }
}

export default CalcColumn;
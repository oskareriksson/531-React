import React, {Component} from "react";
import {Col, Form, FormGroup, Label, Input} from "reactstrap";

class CalcColumn extends Component {
  render(){
    return(
      <Col xs="6">
        <Form>
          <fieldset disabled>
            <FormGroup>
              <Label for={this.props.field1}>{this.props.name1}</Label>
              <Input type="text" id={this.props.field1}/>
            </FormGroup>
            <FormGroup>
              <Label for={this.props.field2}>{this.props.name2}</Label>
              <Input type="text" id={this.props.field2}/>
            </FormGroup>
            <FormGroup>
              <Label for={this.props.field3}>{this.props.name3}</Label>
              <Input type="text" id={this.props.field3}/>
            </FormGroup>
            <FormGroup>
              <Label for={this.props.field4}>{this.props.name4}</Label>
              <Input type="text" id={this.props.field4}/>
            </FormGroup>
            <FormGroup>
              <Label for={this.props.field5}>{this.props.name5}</Label>
              <Input type="text" id={this.props.field5}/>
            </FormGroup>
          </fieldset>
        </Form>
      </Col>
    );
  }
}

export default CalcColumn;
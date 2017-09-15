import React, {Component} from "react";
import {Col, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

class CalcInput extends Component {
  render(){
    return(
      <Col xs="12">
        <h2>Maxlift</h2>
        <Form>
          <FormGroup>
            <Label for="maxlift-in-kg">Maxlift in kilograms</Label>
            <Input type="text" id="maxlift-in-kg" placeholder="Enter your current maxlift" />
          </FormGroup>
          <FormGroup>
            <Label for="maxlift-reps">The amount of repetitions that you can handle with that weight. Keep the maximum amount below 10 reps for best accuracy.</Label>
            <Input type="text" id="maxlift-reps" placeholder="Amount of reps" />
          </FormGroup>
          <Button type="submit" color="success">Calculate</Button>
          <Button type="submit" color="danger">Reset</Button>
          <FormGroup>
            <Label for="one-rep-max">Your one rep max</Label>
            <Input type="text" id="one-rep-max" placeholder="One rep max" aria-describedby="one-rep-max-info" />
            <FormText id="one-rep-max-info" color="muted">This is your calculated one rep max.</FormText>
          </FormGroup>
        </Form>
        <h2>Percentages that you should use for that specific exercise</h2>
      </Col>
    );
  }
}

export default CalcInput;
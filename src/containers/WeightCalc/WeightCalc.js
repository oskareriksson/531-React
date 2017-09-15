import React, {Component} from "react";
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import CalcColumn from "./CalcColumn";

//Stateful component
class WeightCalc extends Component{
  render(){
    return(
      <Container className="weight-calc">
        <Row className="align-items-center">
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
        </Row>
        <Row className="align-items-center">
          <CalcColumn
            field1="fifty-percent-1rm"
            field2="fiftyfive-percent-1rm"
            field3="sixty-percent-1rm"
            field4="sixtyfive-percent-1rm"
            field5="seventy-percent-1rm"
            name1="50% of 1RM"
            name2="55% of 1RM"
            name3="60% of 1RM"
            name4="65% of 1RM"
            name5="70% of 1RM"
          />
          <CalcColumn
            field1="seventyfive-percent-1rm"
            field2="eighty-percent-1rm"
            field3="eightyfive-percent-1rm"
            field4="ninety-percent-1rm"
            field5="ninetyfive-percent-1rm"
            name1="75% of 1RM"
            name2="80% of 1RM"
            name3="85% of 1RM"
            name4="90% of 1RM"
            name5="95% of 1RM"
          />
        </Row>
      </Container>
    );
  }
}

export default WeightCalc;
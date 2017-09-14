import React, {Component} from "react";
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

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
          <Col xs="6">
            <Form>
              <fieldset disabled>
                <FormGroup>
                  <Label for="fifty-percent-1rm">50% of 1RM</Label>
                  <Input type="text" id="fifty-percent-1rm"/>
                </FormGroup>
                <FormGroup>
                  <Label for="fiftyfive-percent-1rm">55% of 1RM</Label>
                  <Input type="text" id="fiftyfive-percent-1rm"/>
                </FormGroup>
                <FormGroup>
                  <Label for="sixty-percent-1rm">60% of 1RM</Label>
                  <Input type="text" id="sixty-percent-1rm"/>
                </FormGroup>
                <FormGroup>
                  <Label for="sixtyfive-percent-1rm">65% of 1RM</Label>
                  <Input type="text" id="sixtyfive-percent-1rm"/>
                </FormGroup>
                <FormGroup>
                  <Label for="seventy-percent-1rm">70% of 1RM</Label>
                  <Input type="text" id="seventy-percent-1rm"/>
                </FormGroup>
              </fieldset>
            </Form>
          </Col>
          <Col xs="6">
            <Form>
              <fieldset disabled>
                <FormGroup>
                  <Label for="seventyfive-percent-1rm">75% of 1RM</Label>
                  <Input type="text" id="seventyfive-percent-1rm"/>
                </FormGroup>
                <FormGroup>
                  <Label for="eighty-percent-1rm">80% of 1RM</Label>
                  <Input type="text" id="eighty-percent-1rm"/>
                </FormGroup>
                <FormGroup>
                  <Label for="eightyfive-percent-1rm">85% of 1RM</Label>
                  <Input type="text" id="eightyfive-percent-1rm"/>
                </FormGroup>
                <FormGroup>
                  <Label for="ninety-percent-1rm">90% of 1RM</Label>
                  <Input type="text" id="ninety-percent-1rm"/>
                </FormGroup>
                <FormGroup>
                  <Label for="ninetyfive-percent-1rm">95% of 1RM</Label>
                  <Input type="text" id="ninetyfive-percent-1rm" />
                </FormGroup>
              </fieldset>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WeightCalc;
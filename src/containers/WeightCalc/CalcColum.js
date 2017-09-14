import React, {Component} from "react";

class CalcColumn extends Component {
  render(){
    return(
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
    );
  }
}

export default CalcColumn;
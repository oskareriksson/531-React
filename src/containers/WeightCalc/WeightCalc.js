import React, {Component} from "react";
import {Container, Row} from "reactstrap";
import CalcInput from "./CalcInput";
import CalcColumn from "./CalcColumn";

//Stateful component
class WeightCalc extends Component{
  render(){
    return(
      <Container className="weight-calc">
        <Row className="align-items-center">
          <CalcInput />
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
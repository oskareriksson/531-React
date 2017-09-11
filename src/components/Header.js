import React from "react";
import {Col} from "reactstrap";

//Stateless component for now
const Header = (props) => {
  return (
    <Col xs="12" className="header">
      <h1>Welcome to 531-React</h1>
      <p>This is going to be an application that will help you track you progress and also calculate the appropriate weights for the 5/3/1 strength program.</p>
    </Col>
  );
}

export default Header;
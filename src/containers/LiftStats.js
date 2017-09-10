import React, {Component} from "react";

//Stateful component
class LiftStats extends Component {
  render(){
    return(
      <div className="col-12 col-sm-6">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default LiftStats;
import React, {Component} from "react";

//Stateful component
class WeightCalc extends Component{
  render(){
    return(
      <div className="weight-calc container">
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <div>
                <h2>Maxlift</h2>
                <form>
                <input type="text" /><label>Maxlift in kilograms</label>
                <input type="text" /><label>Repetitions that you can handle with that weight</label>
                <input type="submit" value="Calculate" />
                <input type="submit" value="Reset" />
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </div>
    );
  }
}

export default WeightCalc;
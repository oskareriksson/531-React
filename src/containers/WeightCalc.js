import React, {Component} from "react";

//Stateful component
class WeightCalc extends Component{
  render(){
    return(
      <div className="weight-calc container">
        <div className="row align-items-center">
          <div className="col-12">
            <h2>Maxlift</h2>
            <form>
              <div className="form-group">
                <label htmlFor="maxlift-in-kg">Maxlift in kilograms</label>
                <input type="text" className="form-control" id="maxlift-in-kg" placeholder="Enter your current maxlift" />
              </div>
              <div className="form-group">
                <label htmlFor="maxlift-reps">The amount of repetitions that you can handle with that weight</label>
                <input type="text" className="form-control" id="maxlift-reps" placeholder="Amount of reps" />
              </div>
              <div className="form-group">
                <label htmlFor="one-rep-max">Your one rep max</label>
                <input type="text" className="form-control" id="one-rep-max" placeholder="One rep max" aria-describedby="one-rep-max-info" />
                <small id="one-rep-max-info" className="form-text text-muted" >If you already now your one rep max for a specific exercise, you only have to use this field in order to calculate your weights.</small>
              </div>
              <button type="submit" className="btn btn-secondary">Calculate</button>
              <button type="submit" className="btn btn-secondary">Reset</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default WeightCalc;
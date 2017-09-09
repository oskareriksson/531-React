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
                <label htmlFor="maxlift-reps">The amount of repetitions that you can handle with that weight. Keep the maximum amount below 10 reps for best accuracy.</label>
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
            <h2>Percentages that you should use for that specific exercise</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-6">
            <form>
              <fieldset disabled>
                <div className="form-group">
                  <label htmlFor="fifty-percent-1rm">50% of 1RM</label>
                  <input type="text" className="form-control" id="fifty-percent-1rm"/>
                </div>
                <div className="form-group">
                  <label htmlFor="fiftyfive-percent-1rm">55% of 1RM</label>
                  <input type="text" className="form-control" id="fiftyfive-percent-1rm"/>
                </div>
                <div className="form-group">
                  <label htmlFor="sixty-percent-1rm">60% of 1RM</label>
                  <input type="text" className="form-control" id="sixty-percent-1rm"/>
                </div>
                <div className="form-group">
                  <label htmlFor="sixtyfive-percent-1rm">65% of 1RM</label>
                  <input type="text" className="form-control" id="sixtyfive-percent-1rm"/>
                </div>
                <div className="form-group">
                  <label htmlFor="seventy-percent-1rm">70% of 1RM</label>
                  <input type="text" className="form-control" id="seventy-percent-1rm"/>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="col-6">
            <form>
              <fieldset disabled>
                <div className="form-group">
                  <label htmlFor="seventyfive-percent-1rm">75% of 1RM</label>
                  <input type="text" className="form-control" id="seventyfive-percent-1rm"/>
                </div>
                <div className="form-group">
                  <label htmlFor="eighty-percent-1rm">80% of 1RM</label>
                  <input type="text" className="form-control" id="eighty-percent-1rm"/>
                </div>
                <div className="form-group">
                  <label htmlFor="eightyfive-percent-1rm">85% of 1RM</label>
                  <input type="text" className="form-control" id="eightyfive-percent-1rm"/>
                </div>
                <div className="form-group">
                  <label htmlFor="ninety-percent-1rm">90% of 1RM</label>
                  <input type="text" className="form-control" id="ninety-percent-1rm"/>
                </div>
                <div className="form-group">
                  <label htmlFor="ninetyfive-percent-1rm">95% of 1RM</label>
                  <input type="text" className="form-control" id="ninetyfive-percent-1rm" />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default WeightCalc;
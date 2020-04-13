import React from "react";
import "../App.css";

const Buttons = (props) => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="homeButtons__touchdown" onClick={props.homeTouchDown}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={props.homeFieldGoal}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={props.awayTouchDown}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={props.awayFieldGoal}>Away Field Goal</button>
      </div>
    </section>
  );
};

export default Buttons;
//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./components/BottomRow";
import TopRow from "./components/TopRow";
import Buttons from "./components/Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const homeTouchDown = e => {
    setHomeScore(homeScore + 7);
  }
  const homeFieldGoal = e => {
    setHomeScore(homeScore + 3)
  }
  const awayTouchDown = e => {
    setAwayScore(awayScore + 7);
  }
  const awayFieldGoal = e => {
    setAwayScore(awayScore + 3);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} />
        <BottomRow />
      </section>
      <Buttons 
        homeTouchDown={homeTouchDown} 
        homeFieldGoal={homeFieldGoal} 
        awayTouchDown={awayTouchDown} 
        awayFieldGoal={awayFieldGoal}
      />
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      {/* header */}
      <h1>
        CountdownCircleTimer
        <br />
        React Component
      </h1>
      {/* circle timer */}
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={10}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 10 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className="timer-wrapper margin">
        <button onClick={() => setIsPlaying(true)}>start</button>
      </div>
      {/* bottom wording */}
      <p className="info">
        Change component properties in the code filed on the right to try
        difference functionalities
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

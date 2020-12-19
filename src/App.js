import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import ColorButton from "./Components/ColorButton";
import Trial from "./Components/Trial";
export default function App() {
  const [color, setColor] = useState("");
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="App">
      <h1>
        <span className="M">M</span>
        <span className="A">A</span>
        <span className="S">S</span>
        <span className="T">T</span>
        <span className="E">E</span>
        <span className="R">R</span>
        <span className="MIND">MIND</span>
      </h1>
      <div className="row">
        <div className="col-md-3 mx-auto">
          <button className="btn" onClick={() => setShowRules(!showRules)}>
            {showRules ? "Hide" : "Show"} Rules
          </button>
          {showRules && (
            <p className="info">
              Try to guess the pattern, in both order and color, within ten
              turns. After submitting a row, a small black peg is placed for
              each code peg from the guess which is correct in both color and
              position. A white peg indicates the existence of a correct color
              code peg placed in the wrong position. More info on Wikipedia.
            </p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 col-md-6 mx-auto clearfix">
          <div className="row">
            <div className="col">
              {color}

              <Trial />
              <Trial />
              <Trial />
              <Trial />
              <Trial />
              <Trial />
              <Trial />
              <Trial />
              <Trial />
              <Trial />
            </div>
            <div className="col">
              <ColorButton setColor={setColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

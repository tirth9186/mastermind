import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import ColorButton from "./Components/ColorButton";
import Trial from "./Components/Trial";

export const colorContext = React.createContext();
export const answerContext = React.createContext();
export const activeContext = React.createContext();
export const statusContext = React.createContext();
export default function App() {
  const [color, setColor] = useState("zero");
  const [status, setStatus] = useState("pending");
  const [active, setActive] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [trials, setTrials] = useState(10);
  const colors = ["zero", "one", "two", "three", "four", "five"];
  const [ans, setAns] = useState([]);
  const arr = [];
  for (let i = 0; i < trials; i++) arr.push(i);

  const startGame = () => {
    setActive(0);
    const temparr = [];
    for (let i = 0; i < 4; i++) {
      let id = Math.floor(Math.random() * 6);
      temparr.push(colors[id]);
    }
    setAns(temparr);
  };

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (status !== "pending") alert("You " + status);
  }, [status]);

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
              <colorContext.Provider value={color}>
                <activeContext.Provider value={[active, setActive]}>
                  <answerContext.Provider value={[ans, trials]}>
                    <statusContext.Provider value={[status, setStatus]}>
                      {arr.map((num) => (
                        <Trial key={num} num={num} />
                      ))}
                    </statusContext.Provider>
                  </answerContext.Provider>
                </activeContext.Provider>
              </colorContext.Provider>
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

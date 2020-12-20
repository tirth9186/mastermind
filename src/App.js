import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
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
  const [trials] = useState(10);
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

  const handleClose = () => {
    console.log("Clicked");
    window.location.reload();
  };

  useEffect(() => {
    startGame();
  }, []);

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

      <Modal
        show={status === "Win"}
        onHide={handleClose}
        centered
        contentClassName="bg-success"
      >
        <Modal.Body className="mx-auto">
          <h1 className="text-white">Congratulations!!</h1>
          <Button variant="light" onClick={handleClose}>
            Play again!
          </Button>
        </Modal.Body>
      </Modal>

      <Modal
        show={status === "Lose"}
        onHide={handleClose}
        centered
        contentClassName="bg-danger"
      >
        <Modal.Body className="mx-auto">
          <h1 className="text-white">Game Over!</h1>
          <Button variant="light" onClick={handleClose}>
            Play again!
          </Button>
        </Modal.Body>
      </Modal>

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
      <div className="row controlled-width">
        <div className="col-8 offset-4 clearfix">
          <div className="row">
            <div className="col-6">
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
            <div className="col-2">
              <ColorButton setColor={setColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

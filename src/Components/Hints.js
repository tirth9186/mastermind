import React, { useEffect, useRef, useContext } from "react";
import { activeContext, answerContext, statusContext } from "../App";
export default function Hints({ judge, seq }) {
  const hintsRef = useRef(null);
  const [ans, trials] = useContext(answerContext);
  const [active] = useContext(activeContext);
  const [, setStatus] = useContext(statusContext);
  useEffect(() => {
    if (judge) {
      const childArr = hintsRef.current.children;
      let correctAnswers = 0;
      for (let i = 0; i < 4; i++) {
        if (seq[i] === ans[i]) {
          ++correctAnswers;
          childArr[i].classList.add("exact-matches");
        } else if (ans.indexOf(seq[i]) !== -1) {
          childArr[i].classList.add("value-matches");
        } else {
          childArr[i].classList.add("none-matches");
        }
      }
      if (correctAnswers === 4) {
        setStatus("Win");
      } else if (active === trials) {
        setStatus("Lose");
      }
    }
  }, [judge, seq, ans, active, trials, setStatus]);

  return (
    <div className="hints-row" ref={hintsRef}>
      <span className="hint"></span>
      <span className="hint"></span>
      <span className="hint"></span>
      <span className="hint"></span>
    </div>
  );
}

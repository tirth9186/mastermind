import React, { useEffect, useContext, useState } from "react";
import { activeContext, answerContext, statusContext } from "../App";
import classNames from "classnames";
export default function Hints({ judge, seq }) {
  const [ans, trials] = useContext(answerContext);
  const [active] = useContext(activeContext);
  const [, setStatus] = useContext(statusContext);
  const [hintSequence, setHintSequence] = useState(["", "", "", ""]);

  let hintClass0 = classNames("hint", hintSequence[0]);
  let hintClass1 = classNames("hint", hintSequence[1]);
  let hintClass2 = classNames("hint", hintSequence[2]);
  let hintClass3 = classNames("hint", hintSequence[3]);

  useEffect(() => {
    if (judge) {
      let correctAnswers = 0;
      let tempHintSequence = [];
      for (let i = 0; i < 4; i++) {
        if (seq[i] === ans[i]) {
          ++correctAnswers;
          tempHintSequence[i] = "exact-matches";
        } else if (ans.indexOf(seq[i]) !== -1) {
          tempHintSequence[i] = "value-matches";
        } else {
          tempHintSequence[i] = "none-matches";
        }
      }
      setHintSequence(tempHintSequence);
      if (correctAnswers === 4) {
        setStatus("Win");
      } else if (active === trials) {
        setStatus("Lose");
      }
    }
  }, [judge, seq, ans, active, trials, setStatus]);

  return (
    <div className="hints-row">
      <span className={hintClass0}></span>
      <span className={hintClass1}></span>
      <span className={hintClass2}></span>
      <span className={hintClass3}></span>
    </div>
  );
}

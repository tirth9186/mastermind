import React, { useState, useContext, useRef } from "react";
import classNames from "classnames";
import { FcCheckmark } from "react-icons/fc";
import Hints from "./Hints";
import { colorContext, activeContext } from "../App";

export default function Trial({ num }) {
  const color = useContext(colorContext);

  const [active, setActive] = useContext(activeContext);
  const [seq, setSeq] = useState(["", "", "", ""]);
  const [selected, setSelected] = useState(0);
  const [judge, setJudge] = useState(false);

  const boxRef = useRef(null);

  let rowClass = classNames("row", "decode-row", { active: active === num });
  let circleClass0 = classNames("round", { border: active === num }, seq[0]);
  let circleClass1 = classNames("round", { border: active === num }, seq[1]);
  let circleClass2 = classNames("round", { border: active === num }, seq[2]);
  let circleClass3 = classNames("round", { border: active === num }, seq[3]);

  const handleClick = (e) => {
    const id = e.target.id;
    if (id !== "" && !id.includes("trial") && active === num) {
      let numId = 0;
      switch (id) {
        case "zero":
          numId = 0;
          break;
        case "one":
          numId = 1;
          break;
        case "two":
          numId = 2;
          break;
        case "three":
          numId = 3;
          break;
        default:
      }
      if (seq[numId] === "") setSelected(selected + 1);

      setSeq((seq) => {
        const seq1 = seq.map((ele, id) => {
          if (id === numId) return color;
          else return ele;
        });
        return seq1;
      });
    }
  };

  const handleSubmit = () => {
    if (active === num) {
      setSelected(0);
      setJudge(true);
      setActive(active + 1);
    }
  };

  return (
    <div id="trial" className={rowClass} ref={boxRef} onClick={handleClick}>
      <span id="zero" className={circleClass0}></span>
      <span id="one" className={circleClass1}></span>
      <span id="two" className={circleClass2}></span>
      <span id="three" className={circleClass3}></span>
      {selected === 4 && (
        <FcCheckmark
          size="20px"
          className="mt-3 ml-3 hover-grey"
          onClick={handleSubmit}
        />
      )}
      <div className="ml-auto">
        <Hints judge={judge} seq={seq} setSeq={setSeq} />
      </div>
    </div>
  );
}

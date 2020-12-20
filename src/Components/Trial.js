import React, { useState, useContext, useEffect } from "react";
import { FcCheckmark } from "react-icons/fc";
import Hints from "./Hints";
import { colorContext, activeContext } from "../App";

export default function Trial({ num }) {
  const color = useContext(colorContext);

  const [active, setActive] = useContext(activeContext);
  const [seq, setSeq] = useState(["", "", "", ""]);
  const [selected, setSelected] = useState(0);
  const [judge, setJudge] = useState(false);
  const handleClick = (e) => {
    const id = e.target.id;
    if (id !== "" && !id.includes("trial") && active === num) {
      const ele = document.getElementById(id);
      if (ele.classList.length <= 2) {
        ele.classList.add(color);
        setSelected(selected + 1);
      } else {
        const last = ele.classList[ele.classList.length - 1];
        ele.classList.remove(last);
        ele.classList.add(color);
      }
      let numId = 0;
      switch (id) {
        case "zero" + num:
          numId = 0;
          break;
        case "one" + num:
          numId = 1;
          break;
        case "two" + num:
          numId = 2;
          break;
        case "three" + num:
          numId = 3;
          break;
        default:
      }
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
      setJudge(true);
      setActive(active + 1);
    }
  };

  useEffect(() => {
    const e1 = document.getElementById("zero");
    const e2 = document.getElementById("one");
    const e3 = document.getElementById("two");
    const e4 = document.getElementById("three");
    const e5 = document.getElementById("trial");
    if (e1 && e2 && e3 && e4 && e5) {
      e1.setAttribute("id", e1.id + num);
      e2.setAttribute("id", e2.id + num);
      e3.setAttribute("id", e3.id + num);
      e4.setAttribute("id", e4.id + num);
      e5.setAttribute("id", e5.id + num);
    }
  }, [num]);

  useEffect(() => {
    if (active !== num && active - 1 !== num) return;
    const e5 = document.getElementById("trial" + num);
    const childArr = e5.children;
    if (active === num) {
      e5.classList.add("active");
      for (let i = 0; i < childArr.length; i++) {
        if (childArr[i].classList[0] === "round")
          childArr[i].classList.add("border");
      }
    } else if (active - 1 === num) {
      setSelected(0);
      e5.classList.remove("active");
      for (let i = 0; i < childArr.length; i++) {
        if (childArr[i].classList[0] === "round")
          childArr[i].classList.remove("border");
      }
    }
  }, [active, num]);

  return (
    <div id="trial" className="row decode-row" onClick={handleClick}>
      <span id="zero" className="round "></span>
      <span id="one" className="round "></span>
      <span id="two" className="round "></span>
      <span id="three" className="round "></span>
      {selected === 4 && (
        <FcCheckmark
          size="20px"
          className="mt-3 ml-3 hover-grey"
          onClick={handleSubmit}
        />
      )}
      <div className="ml-auto">
        <Hints judge={judge} seq={seq} />
      </div>
    </div>
  );
}

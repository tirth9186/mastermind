import React, { useState, useContext, useEffect } from "react";
import Hints from "./Hints";
import { colorContext } from "../App";
export default function Trial({ num, active }) {
  const color = useContext(colorContext);
  const [selected, setSelected] = useState(0);

  const handleClick = (e) => {
    const id = e.target.id;
    if (id !== "" && !id.includes("trial") && active) {
      const ele = document.getElementById(id);
      if (ele.classList.length <= 1) ele.classList.add(color);
      else {
        const last = ele.classList[ele.classList.length - 1];
        ele.classList.remove(last);
        ele.classList.add(color);
      }
    }
  };

  useEffect(() => {
    const e1 = document.getElementById("zero");
    const e2 = document.getElementById("one");
    const e3 = document.getElementById("two");
    const e4 = document.getElementById("three");
    const e5 = document.getElementById("trial");
    e1.setAttribute("id", e1.id + num);
    e2.setAttribute("id", e2.id + num);
    e3.setAttribute("id", e3.id + num);
    e4.setAttribute("id", e4.id + num);
    e5.setAttribute("id", e5.id + num);
    if (active) {
      e5.classList.add("active");
      e1.classList.add("border");
      e2.classList.add("border");
      e3.classList.add("border");
      e4.classList.add("border");
    }
  }, []);

  return (
    <div id="trial" className="row decode-row w-75" onClick={handleClick}>
      <span id="zero" className="round "></span>
      <span id="one" className="round "></span>
      <span id="two" className="round "></span>
      <span id="three" className="round "></span>
      <div className="ml-auto">
        <Hints />
      </div>
    </div>
  );
}

import React, { useRef } from "react";

export default function ColorButton({ setColor }) {
  const parentRef = useRef(null);

  const handleClick = (e) => {
    e.stopPropagation();
    if (e.target.id.length > 0) {
      setColor(e.target.id);
      const prev = parentRef.current.getElementsByClassName("selected")[0];
      prev.classList.remove("selected");
      e.target.classList.add("selected");
    }
  };

  return (
    <div
      className="d-flex flex-column"
      onClick={handleClick}
      style={{ top: "50px", position: "sticky" }}
      ref={parentRef}
    >
      <span id="zero" className="round zero selected"></span>
      <span id="one" className="round one"></span>
      <span id="two" className="round two"></span>
      <span id="three" className="round three"></span>
      <span id="four" className="round four"></span>
      <span id="five" className="round five"></span>
    </div>
  );
}

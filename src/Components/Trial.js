import React from "react";
import Hints from "./Hints";

export default function Trial() {
  return (
    <div className="row w-75">
      <span id="zero" className="round selected"></span>
      <span id="one" className="round selected"></span>
      <span id="two" className="round selected"></span>
      <span id="three" className="round selected"></span>
      <div className="ml-auto">
        <Hints />
      </div>
    </div>
  );
}

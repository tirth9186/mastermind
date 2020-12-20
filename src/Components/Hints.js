import React, { useEffect } from "react";

export default function Hints({ judge, seq }) {
  useEffect(() => {
    if (judge) {
    }
  }, [judge]);

  return (
    <div className="hints-row">
      <span className="hint"></span>
      <span className="hint none-matches"></span>
      <span className="hint"></span>
      <span className="hint"></span>
    </div>
  );
}

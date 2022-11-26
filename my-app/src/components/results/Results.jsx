import React from "react";
import { useSelector } from "react-redux";
import "./results.css";
import MiniReco from "../miniReco/MiniReco";

function Results() {
  const result = useSelector((state) => state.result.res);

  return (
    <div className="resContainer">
      {result
        ? result.map((element) => (
          <MiniReco element={element} />
          ))
        : null}
    </div>
  );
}

export default Results;

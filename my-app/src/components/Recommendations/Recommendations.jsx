import React from "react";
import "./recommendations.css";
import Results from "../results/Results";
import MiniReco from "../miniReco/MiniReco";
import { useSelector } from "react-redux";

function Recommendations() {
  const result = useSelector((state) => state.result.res);
  return (
    <div className="recoCont">
      <p>עוד עסקים באזור</p>
      <div className="recoContainer">
        {result
          ? result.map((element) => <MiniReco element={element} />)
          : null}
      </div>
    </div>
  );
}

export default Recommendations;

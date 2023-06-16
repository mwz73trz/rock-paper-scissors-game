import React from "react";
import { useGlobalContext } from "../context";

function Decision() {
  const { computer, winner } = useGlobalContext();
  return (
    <div>
      <h4>Computer Picked: {computer}</h4>
      <h5>Winner is: {winner}</h5>
    </div>
  );
}

export default Decision;

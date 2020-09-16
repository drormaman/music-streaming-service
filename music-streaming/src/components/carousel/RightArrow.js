import React from "react";

function RightArrow(props) {
  return (
    <button onClick={props.click} className="right-arrow">
      {">"}
    </button>
  );
}
export default RightArrow;

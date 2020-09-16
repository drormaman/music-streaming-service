import React from "react";

function LeftArrow(props) {
  return (
    <button onClick={props.click} className="left-arrow">
      {"<"}
    </button>
  );
}
export default LeftArrow;

import React, { useState } from "react";
import "./styles.css";

function GozineBox(props) {
  const [open, setOpen] = useState(false);
  const opening = () => {
    setOpen(!open);
  };
  return (
    <div>
      <button className="button1w active" onClick={opening}>
        {props.button}
      </button>
      <div className={`up ${open ? undefined : "hidden"}`}>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default GozineBox;

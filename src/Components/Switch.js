import React from "react";
import "./Styles/switch.css";

const Switch = ({ checked, changeHandler, id }) => {
  return (
    <div>
      <label class="switch">
        <input
          onClick={() => {
            changeHandler(id);
          }}
          type="checkbox"
          checked={checked}
        />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;

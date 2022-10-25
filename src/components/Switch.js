import { useContext, useState } from "react";
import { themeContext } from "../App";
import "./Switch.css";
const Switch = () => {
  const contextState = useContext(themeContext);

  const onToggle = () => {
    contextState.setIsToggled(!contextState.isToggled);
    if (!contextState.isToggled) {
    }
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={contextState.isToggled}
        onChange={onToggle}
      />
      <span className="switch" />
    </label>
  );
};

export default Switch;

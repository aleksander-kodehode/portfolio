import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import "./Switch.css";
const Switch = () => {
  const contextState = useContext(themeContext);

  const onToggle = () => {
    //send state of toggle btn to the context
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

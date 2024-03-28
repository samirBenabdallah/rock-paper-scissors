import { useState } from "react";
import "./button.css";
const Button = ({ handleClick }) => {
  return (
    <button className="rule-button" onClick={handleClick}>
      <p>rules</p>
    </button>
  );
};

export default Button;

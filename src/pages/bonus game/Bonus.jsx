import { Button, Header, Rules } from "../components";
import "./bonus.css";
import React, { useState } from "react";
import logo from "../../public/images/logo-bonus.svg";
import ruleImg from "../../public/images/image-rules-bonus.svg";
import FirstStep from "../first step/FirstStep";
const Bonus = () => {
  const [showRules, setShowRules] = useState(false);
  const [stepNumber, setStepNumber] = useState(1);
  const [playerHand, setplayer] = useState("none");
  function clickHandle(value) {
    setplayer(value);
    setStepNumber((current) => current + 1);
  }

  return (
    <section className="bonus">
      <Header logo={logo} path={"/"} type={"bonus"} />
      {stepNumber === 1 && <FirstStep type={"bonus"} clickHandle={clickHandle}/>}
      <Button handleClick={() => setShowRules(true)} />
      {showRules && (
        <Rules handleClick={() => setShowRules(false)} img={ruleImg} />
      )}
    </section>
  );
};

export default Bonus;

import { Button, Header, Rules } from "../components";
import logo from "../../public/images/logo.svg";
import "./normal.css";
import { useEffect, useState } from "react";
import ruleImg from "../../public/images/image-rules.svg";
import FirstStep from "../first step/FirstStep";
import SecondStep from "../second step/SecondStep";
const Normal = () => {
  const [showRules, setShowRules] = useState(false);
  const [stepNumber, setStepNumber] = useState(1);
  const [playerHand, setplayer] = useState("none");
  function clickHandle(value) {
    setplayer(value);
    setStepNumber((curr) => curr + 1);
  }
  return (
    <section className="normal">
      <Header logo={logo} path={"/bonus"} type={"normal"} />
      {stepNumber === 1 && (
        <FirstStep type={"normal"} clickHandle={clickHandle} />
      )}
      <Button handleClick={() => setShowRules(true)} />
      {showRules && (
        <Rules handleClick={() => setShowRules(false)} img={ruleImg} />
      )}
    </section>
  );
};

export default Normal;

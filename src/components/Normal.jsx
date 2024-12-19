import React from "react";
import normalBg from "../../images/bg-triangle.svg";
import Hand from "./Hand";
import rockImg from "../../images/icon-rock.svg";
import paperImg from "../../images/icon-paper.svg";
import scissorsImg from "../../images/icon-scissors.svg";
import { PAPER, ROCK, SCISSORS } from "./gameRule";
function Normal() {
  const handContainer = (ele, className) => (
    <div
      className={`w-28 h-28 bg-gradient-to-r flex items-center justify-center rounded-[50%] ${className}`}
    >
      {ele}
    </div>
  );
  return (
    <div className="relative mt-10 w-[200px] h-[180px]">
      <img src={normalBg} alt="normal bg" className="w-[200px] top-0 left-0" />
      {handContainer(
        <Hand name={PAPER} image={paperImg} className=" " />,
        "from-Paper-first to-Paper-last absolute top-0 left-0 z-[1] -translate-x-7 -translate-y-10"
      )}
      {handContainer(
        <Hand name={ROCK} image={rockImg} className="" />,
        "absolute top-0 right-0 z-[1] translate-x-8 -translate-y-10 from-Rock-first to-Rock-last"
      )}
      {handContainer(
        <Hand image={scissorsImg} name={SCISSORS} className="" />,
        "absolute bottom-0 left-1/2 z-[1] -translate-x-1/2 translate-y-5 from-Scissors-first to-Scissors-last"
      )}
    </div>
  );
}

export default Normal;

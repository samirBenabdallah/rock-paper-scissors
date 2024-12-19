import React from "react";
import Hand from "./Hand";
import bonusImg from "../../images/bg-pentagon.svg";
import rockImg from "../../images/icon-rock.svg";
import paperImg from "../../images/icon-paper.svg";
import scissorsImg from "../../images/icon-scissors.svg";
import lizardImg from "../../images/icon-lizard.svg";
import spockImg from "../../images/icon-spock.svg";
import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from "../components/gameRule";
function Bonus() {
  const HandContainer = ({ ele, className }) => (
    <div
      className={`w-28 h-28 bg-gradient-to-r flex items-center justify-center rounded-[50%] ${className}`}
    >
      {ele}
    </div>
  );
  return (
    <div className="relative w-[250px] h-[130px]">
      <img src={bonusImg} alt="normal bg" className="w-full top-0 left-0" />
      <HandContainer
        ele={<Hand name={PAPER} image={paperImg} />}
        className="absolute top-1/2 right-0 translate-x-8 -translate-y-5 from-Paper-first to-Paper-last"
      />
      <HandContainer
        ele={<Hand name={ROCK} image={rockImg} />}
        className="absolute right-0 -translate-y-[60px] from-Rock-first to-Rock-last"
      />
      <HandContainer
        ele={<Hand image={scissorsImg} name={SCISSORS} />}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 from-Scissors-first to-Scissors-last"
      />
      <HandContainer
        ele={<Hand image={lizardImg} name={LIZARD} />}
        className="absolute -translate-y-16 -translate-x-2 from-Lizard-first to-Lizard-last"
      />
      <HandContainer
        ele={<Hand image={spockImg} name={SPOCK} />}
        className="absolute top-1/2 -translate-x-10 -translate-y-3 from-Spock-first to-Spock-last"
      />
    </div>
  );
}

export default Bonus;

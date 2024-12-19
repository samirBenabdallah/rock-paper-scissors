import rockImg from "./icon-rock.svg";
import paperImg from "./icon-paper.svg";
import scissorsImg from "./icon-scissors.svg";
import lizardImg from "./icon-lizard.svg";
import spockImg from "./icon-spock.svg";
import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from "../src/components/gameRule";

export default function getImg(name) {
  switch (name) {
    case ROCK:
      return rockImg;
    case PAPER:
      return paperImg;
    case LIZARD:
      return lizardImg;
    case SCISSORS:
      return scissorsImg;
    case SPOCK:
      return spockImg;
  }
}

export { lizardImg, paperImg, rockImg, scissorsImg, spockImg };

import { Element } from "../components";
import "./secondStep.css";
import {
  lizardImg,
  paperImg,
  rockImg,
  spockImg,
  scissorsImg,
} from "../../public/images/images";
import { useEffect, useState } from "react";
import { l } from "vite/dist/node/types.d-aGj9QkWt";
function getImg(id) {
  switch (id) {
    case "rock":
      return rockImg;
    case "lizard":
      return lizardImg;
    case "scissors":
      return scissorsImg;
    case "spock":
      return spockImg;
    case "paper":
      return paperImg;
  }
}
const SecondStep = ({ playerHand }) => {
  const [houseHand, setHouseHand] = useState("");
  console.log(playerHand);
  useEffect(() => {
    setTimeout(() => {
      const hands = ["rock", "paper", "scissors", "lizard", "spock"];
      const randomValue = Math.floor(Math.random() * 5);
      setHouseHand(hands[randomValue]);
    }, 100);
  }, []);
  return (
    <div className="second-step">
      <div>
        <p>you picked</p>
        <div className="empty-div"></div>
        <Element
          clickHandle={() => {}}
          id={playerHand}
          img={getImg(playerHand)}
        />
      </div>

      <div>
        <p>the house picked</p>
        <div className="empty-div"></div>
        {houseHand === "" || (
          <Element
            clickHandle={() => {}}
            id={houseHand}
            img={getImg(houseHand)}
          />
        )}
      </div>
    </div>
  );
};

export default SecondStep;

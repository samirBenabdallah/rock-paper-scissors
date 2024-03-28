import "./firstStep.css";
import { Element } from "../components";
import {
  bonusImg,
  normalImg,
  rockImg,
  paperImg,
  scissorsImg,
  lizardImg,
  spockImg,
} from "../../public/images/images";
const FirstStep = ({ type, clickHandle }) => {
  return (
    <div className={"first-step " + type}>
      <img src={type === "normal" ? normalImg : bonusImg} alt="bg img" />
      <Element id={"rock"} img={rockImg} clickHandle={clickHandle} />
      <Element id={"paper"} img={paperImg} clickHandle={clickHandle} />
      <Element id={"scissors"} img={scissorsImg} clickHandle={clickHandle} />
      {type === "bonus" && (
        <>
          <Element id={"lizard"} img={lizardImg} clickHandle={clickHandle} />
          <Element id={"spock"} img={spockImg} clickHandle={clickHandle} />
        </>
      )}
    </div>
  );
};
export default FirstStep;

import { useDispatch, useSelector } from "react-redux";
import Hand from "../components/Hand";
import getImg from "../../images/images";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getRandomHand, hundleGameResult } from "../components/gameRule";
import { changeScore, setChoice } from "../../rtk/data";

function SecondStep() {
  const data = useSelector((s) => s.data);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const [botChoice, setbotChoice] = useState(null);
  const [result, setresult] = useState(null);
  const navigate = useNavigate();
  const HandContainer = ({ ele, className }) => (
    <div
      className={`w-28 h-28 bg-gradient-to-r flex items-center justify-center rounded-[50%] ${className}`}
    >
      {ele}
    </div>
  );
  useEffect(() => {
    if (data.choice === "none") navigate("/");
    if (!result) setbotChoice(getRandomHand(data.gametype));
  }, [data]);
  useEffect(() => {
    if (botChoice) {
      setloading(false);
      setresult(hundleGameResult(data.choice, botChoice, data.gametype));
    }
  }, [botChoice]);
  useEffect(() => {
    if (result) dispatch(changeScore(result));
  }, [result]);
  return (
    <div className="w-full md:w-[750px] flex justify-between relative">
      <div className="w-2/5 flex flex-col items-center">
        <p className="text-center uppercase text-gray-200 font-bold">
          you picked
        </p>
        <HandContainer
          ele={<Hand image={getImg(data.choice)} isclecked={false} />}
          className={`mt-10 from-${data.choice}-first to-${data.choice}-last`}
        />
      </div>
      {result && (
        <div className="flex flex-col justify-center items-center md:static absolute right-1/2 translate-x-1/2 -bottom-20 translate-y-full md:translate-x-0 md:translate-y-0 ">
          <p className="font-extrabold text-[30px] text-gray-200 uppercase ">
            {result === "draw" ? "draw" : `you ${result}`}
          </p>
          <Link
            to={"/"}
            onClick={() => dispatch(setChoice())}
            className="bg-gray-200 uppercase mt-5
             text-Score-Text text-center rounded-lg py-2 px-5"
          >
            play again
          </Link>
        </div>
      )}
      <div className="w-2/5 flex flex-col items-center">
        <p className="text-center uppercase text-gray-200 font-bold">
          the house picked
        </p>
        {loading ? (
          <div className="w-20 h-20 rounded-[50%] bg-black bg-opacity-40 mt-10"></div>
        ) : (
          <HandContainer
            className={`mt-10 from-${botChoice}-first to-${botChoice}-last `}
            ele={<Hand image={getImg(botChoice)} />}
          />
        )}
      </div>
    </div>
  );
}

export default SecondStep;

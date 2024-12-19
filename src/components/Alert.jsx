import React from "react";
import normalRules from "../../images/image-rules.svg";
import bonusRules from "../../images/image-rules-bonus.svg";
import { useSelector } from "react-redux";
import closeImg from "../../images/icon-close.svg";
function Alert({ onClick }) {
  const { gametype } = useSelector((s) => s.data);
  return (
    <div
      className="w-full h-full absolute top-0 z-10 flex items-center justify-center bg-black bg-opacity-40"
      onClick={onClick}
    >
      <section className="w-full h-full sm:w-[500px] sm:h-[400px] sm:rounded-md flex flex-col items-center bg-gray-200 relative">
        <h1 className="font-bold text-[35px] text-Dark-Text mb-10 text-center sm:text-start w-full pl-5">
          RULES
        </h1>
        <img
          onClick={() => {
            onClick;
          }}
          src={closeImg}
          alt="close img"
          className="absolute sm:top-5 bottom-10 cursor-pointer right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-8 z-10"
        />
        <img
          src={gametype === "normal" ? normalRules : bonusRules}
          className="w-[250px]"
        />
      </section>
    </div>
  );
}

export default Alert;

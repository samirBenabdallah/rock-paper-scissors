import React from "react";
import { useDispatch, useSelector } from "react-redux";
import normalLogo from "../../images/logo.svg";
import bonusLogo from "../../images/logo-bonus.svg";
import { toggleGameType } from "../../rtk/data";
import { Link } from "react-router-dom";
function Header() {
  const { gametype, score } = useSelector((s) => s.data);
  const dispatch = useDispatch();
  function changeGameType() {
    dispatch(toggleGameType());
  }
  return (
    <div className="h-[130px] md:h-[150px] w-full md:w-[700px] border-2 rounded-md border-Header-Outline flex items-center justify-between p-4 max-sm:mb-20 mb-24">
      <Link to={"/"}>
        <img
          src={gametype === "normal" ? normalLogo : bonusLogo}
          alt="game logo"
          onClick={changeGameType}
          className="cursor-pointer h-full "
        />
      </Link>
      <div className="w-[150px] h-full flex flex-col items-center justify-center bg-gray-200 rounded-lg">
        <p className="uppercase text-Score-Text">score</p>
        <p className="text-[30px] md:text-[40px] text-Dark-Text font-bold">
          {gametype === "normal" ? score.normal : score.bonus}
        </p>
      </div>
    </div>
  );
}

export default Header;

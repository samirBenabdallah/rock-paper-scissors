import { useSelector } from "react-redux";
import "./header.css";
import { Link } from "react-router-dom";
const Header = ({ logo, path, type }) => {
  const rtk = useSelector((s) => s);
  let score;
  if (type === "normal") score = rtk.score.normal;
  else score = rtk.score.bonus;
  return (
    <header>
      <Link to={path}>
        <img src={logo} alt="logo img" />
      </Link>
      <div>
        <p>score</p>
        <p> {score} </p>
      </div>
    </header>
  );
};

export default Header;

import { useDispatch } from "react-redux";
import { setChoice } from "../../rtk/data";
import { useNavigate } from "react-router-dom";

function Hand({ name = "none", className, image }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const beforeElement =
    "before:w-24 before:h-24 before:rounded-[50%] before:absolute";
  function hundleClick(e) {
    if (name === "none") return;
    dispatch(setChoice(name));
    navigate("/second-step");
  }
  return (
    <div
      className={`${className} w-20 h-20 flex items-center cursor-pointer justify-center rounded-[50%] bg-gray-200 ${beforeElement}`}
      onClick={(e) => hundleClick(e)}
    >
      <img src={image} alt="image" className="z-10 w-1/2" />
    </div>
  );
}

export default Hand;

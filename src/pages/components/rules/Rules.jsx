import "./rules.css";
import closeImg from "../../../public/images/icon-close.svg";
const Rules = ({ img, handleClick }) => {
  return (
    <div className="rules">
      <section>
        <h1>rules</h1>
        <img src={img} alt="rule img" />
        <img src={closeImg} alt="close icon" onClick={handleClick} />
      </section>
    </div>
  );
};

export default Rules;

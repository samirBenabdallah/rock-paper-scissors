import "./element.css";
const Element = ({ id, img, clickHandle }) => {
  return (
    <div
      className="element"
      id={id}
      onClick={() => {
        clickHandle(id);
      }}
    >
      <div className="befor"></div>
      <img src={img} alt="element img" />
    </div>
  );
};

export default Element;

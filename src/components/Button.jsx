import React from "react";
function Button({ buttonClick }) {
  return (
    <div
      className="absolute bottom-10 sm:right-10 border-2 border-Header-Outline px-7 py-1 rounded-lg uppercase text-gray-200 cursor-pointer"
      onClick={buttonClick}
    >
      rules
    </div>
  );
}

export default Button;

import React from "react";

function ButtonNoneBG({ text }) {
  return (
    <div>
      <button className="hover:text-white hover:bg-main transition px-5 rounded-lg font-[600]  sm:text-xl text-sm py-2 bg-white text-main border-2 border-main">
        {text}
      </button>
    </div>
  );
}

export default ButtonNoneBG;

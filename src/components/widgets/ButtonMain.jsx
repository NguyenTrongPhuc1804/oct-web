import React from "react";

function ButtonMain({ text }) {
  return (
    <div>
      <button className="px-5 rounded-md font-[600] text-white sm:text-xl text-sm py-2 bg-[#f7941d]">
        {text}
      </button>
    </div>
  );
}

export default ButtonMain;

import React from "react";
import { buttonList } from "../utils/Constants";

const ButtonList = () => {
  return (
    <div className="ml-2 p-1 flex flex-wrap gap-3">
      {buttonList.map((items, index) => (
        <button
          key={index}
          className="border border-gray-200 rounded-lg p-1 bg-slate-100"
        >
          {items}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;

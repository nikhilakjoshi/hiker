import React from "react";
import SmartTitle from "./SmartTitle";

const Level = ({ title, number, description, readmoreLink, subtitle }) => {
  return (
    <div className="lvlRoot items-center">
      <SmartTitle isNumber={number} title={subtitle} />
      <h2 className="font-noto text-gray-50 text-5xl my-4">{title}</h2>
      <p className="text-xl text-white text-opacity-70 mt-8 font-mont tracking-wide">
        {description}
      </p>
    </div>
  );
};

export default Level;

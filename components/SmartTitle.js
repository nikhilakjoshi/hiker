import React from "react";

const SmartTitle = ({ title, isNumber }) => {
  return (
    <div className="relative uppercase font-combo text-left tracking-wider text-lg text-amber-300 ml-16 before:absolute before:h-[1px] before:w-14 before:bg-amber-300 before:-left-16 before:top-1/2 z-0">
      {title}
      {isNumber && (
        <div className="numbering absolute font-noto -left-24 -translate-y-1/2 text-9xl font-bold text-gray-500 top-0 text-opacity-30 z-0">
          {isNumber}
        </div>
      )}
    </div>
  );
};

export default SmartTitle;

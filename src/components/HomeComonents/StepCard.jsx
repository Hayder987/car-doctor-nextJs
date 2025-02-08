import React from "react";

const StepCard = ({ step, title, desc }) => {
  return (
    <div className="flex flex-col border-t-2 rounded-lg p-6 justify-center items-center">
      <div className="bg-red-300 mb-3 w-14 h-14 rounded-full flex justify-center items-center">
        <h3 className="bg-red-600 w-10 h-10 rounded-full flex justify-center items-center text-white">{step}</h3>
      </div>
      <p className="text-center text-xl font-bold mb-3">{title}</p>
      <p className="">{desc}</p>
    </div>
  );
};

export default StepCard;

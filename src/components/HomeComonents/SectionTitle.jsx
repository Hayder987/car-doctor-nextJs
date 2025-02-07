import React from "react";

const SectionTitle = ({heading, title, desc}) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-red-600 mb-5 text-center">
       {heading}
      </h3>
      <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
      <p className="text-center text-gray-600 font-medium mb-12 lg:w-7/12 mx-auto">{desc}</p>
    </div>
  );
};

export default SectionTitle;

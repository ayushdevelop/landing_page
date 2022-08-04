import React from "react";

const Description = ({ project }) => {
  const description = project.description.data.description;
  return (
    <div className="mt-2 mb-2 p-2 flex flex-col items-center md:items-start">
      <div className="font-medium text-gray-900 mb-1">Description</div>
      <div className="text-xs md:text-sm md:text-left text-center text-gray-600">{description}</div>
    </div>
  );
};
export default Description;

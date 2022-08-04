import React from "react";

const Tools = ({ project }) => {
  const { tools } = project;

  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="text-gray-900 font-medium p-2">Tech Used</div>
      <div className="flex flex-row m-2">
        {tools.map((tool) => (
          <div
            className="flex flex-col m-1 justify-center items-center w-16"
            key={tool.logo.localFile.id}
          >
            <img src={tool.logo.localFile.url} alt="tool logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2" />
            <div className="text-xs text-gray-600 sm:text-sm md:text-base">{tool.nameoftool}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;

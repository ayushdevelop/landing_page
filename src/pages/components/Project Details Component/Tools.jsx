import React from "react";

const Tools = ({ project }) => {
  const { tools } = project;

  return (
    <div className="flex flex-col items-start">
      <div className="text-gray-900 font-medium">Tech Used</div>
      <div className="flex flex-row m-2">
        {tools.map((tool) => (
          <div className="flex flex-col m-1 justify-center items-start w-16">
            <img src={tool.logo.localFile.url} className="w-10 h-10 mb-2" />
            <div className="text-sm text-gray-600">{tool.nameoftool}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;

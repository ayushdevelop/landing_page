import React from "react";

const Requirements = ({project}) => {
    const requirements = project.requirements.data.requirements;
  return (
    <div className="mt-2 mb-2 p-2 flex flex-col items-center sm:items-start">
      <div className="font-medium text-gray-900 mb-1">Requirements</div>
      <div className="text-xs sm:text-sm text-center sm:text-left text-gray-600">
        {requirements}
      </div>
    </div>
  );
};

export default Requirements;

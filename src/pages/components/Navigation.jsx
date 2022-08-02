import React from "react";

const Navigation = ({navBarContent}) => {
  const {logo_title, logo_image} = navBarContent;

return (
    <div className="max-w-7xl bg-white h-5 p-6 m-auto flex items-center">
      <div className="ml-20 mt-10 text-2xl text-gray-500">{logo_title}</div>
    </div>
  );
};

export default Navigation;

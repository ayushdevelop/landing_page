import React from "react";

const Navigation = ({ navBarContent }) => {
  const { logo_title, logo_image } = navBarContent;
  const [imgSrc] = logo_image; // image url source
  const src = imgSrc.localFile.url;

  return (
    <div className="max-w-7xl bg-white h-5 p-6 m-auto mb-12 flex items-center">
      <img src={src} className="ml-20 mt-10 w-10 h-10" />
      <div className="ml-2 mt-10 text-2xl text-gray-500">{logo_title}</div>
    </div>
  );
};

export default Navigation;

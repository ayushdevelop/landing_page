import React from "react";

const Banner = ({ bannerImage }) => {
  const { banner_image } = bannerImage;
  const imgSrc = banner_image.localFile.url;

  return (
    <div className="mt-24 sm:mt-0">
      <div
        className="max-w-full h-64 bg-center bg-cover bg-fixed"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
    </div>
  );
};

export default Banner;

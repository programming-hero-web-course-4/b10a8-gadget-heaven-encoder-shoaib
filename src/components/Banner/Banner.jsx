import React from "react";
import bannerImg from "../../assets/image/banner.jpg";

const Banner = ({showBanner}) => {
  return (
    <div className={`px-4 md:px-16 flex justify-center relative -top-32 mb-14 ${!showBanner ? "hidden" : ""}`}>
      <div className="w-full max-w-[1062px] border-8 bg-gray-200 p-4 rounded-2xl">
        <div className="shadow-lg flex justify-center rounded-2xl">
          <img
            className="rounded-xl object-cover w-full md:h-[503px]"
            src={bannerImg}
            alt="Beautiful banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;


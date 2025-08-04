import React from "react";
import Slider from "infinite-react-carousel";

const Slide = ({children,slidesToShow, arrowsScroll} ) => {
  return (
    // slide
    <div className="flex justify-center py-[100px] px-4 md:px-8">
      {/* container */}
      <div className="w-[1400px]">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} swipe={true}
  arrows={false} >
            {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeslider py-4">
      <div className="container">
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <img
              src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg
      "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg
      "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;

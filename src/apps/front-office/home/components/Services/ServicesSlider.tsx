// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ServicesType } from "./types";
import Service from "./Service";
import { Navigation } from "swiper/modules";
import useBreakpoints from "apps/front-office/common/hooks/useBreakpoints";
import { ArrowIcon } from "shared/assets/svgs";

const ServicesSlider = ({ services }: ServicesType) => {
  const { medium } = useBreakpoints();
  return (
    <Swiper
      spaceBetween={!medium ? 30 : 100}
      slidesPerView={3}
      modules={[Navigation]}
      navigation={{
        nextEl: ".custom--next",
        prevEl: ".custom--prev",
      }}
      breakpoints={{
        280: {
          slidesPerView: 1,
        },
        360: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}>
      {services.map(service => (
        <SwiperSlide key={service.title}>
          <Service
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
            color={service.color}
          />
        </SwiperSlide>
      ))}
      <div className="custom--prev">
        <ArrowIcon type="left" />
      </div>
      <div className="custom--next">
        <ArrowIcon type="right" />
      </div>
    </Swiper>
  );
};
export default ServicesSlider;

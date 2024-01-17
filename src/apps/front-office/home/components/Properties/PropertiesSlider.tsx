import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowIcon } from "shared/assets/svgs";
import Property from "apps/front-office/design-system/components/Property";

const PropertiesSlider = ({ properties }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation={{
        nextEl: ".custom--next",
        prevEl: ".custom--prev"
      }}
      autoplay={true}
      pagination={{ clickable: true }}
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
        992:{
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }}>
      {properties.map((property, i) => (
        <SwiperSlide key={property.id}>
          <Property property={property} />
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
export default PropertiesSlider;

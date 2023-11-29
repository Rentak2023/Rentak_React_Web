import { Swiper, SwiperSlide } from "swiper/react";
import BrandsIcon from "shared/assets/svgs/BrandsIcon";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Flex } from "apps/front-office/design-system/components/Grids";
import { ArrowIcon } from "shared/assets/svgs";
import { theme } from "apps/front-office/design-system";

const BrandsSlider = ({ brands }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={5}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: ".custom--next",
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
        992:{
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 5
        }
      }}>
      {brands.map((brand, i) => (
        <SwiperSlide key={`brand-${i}`}>
          <Flex justify="center" fullWidth>
            <BrandsIcon type={brand} />
          </Flex>
        </SwiperSlide>
      ))}

      <div className="custom--next">
        <ArrowIcon type="right" />
      </div>
    </Swiper>
  );
};
export default BrandsSlider;

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { SliderContainer } from "./style";
import { ArrowIcon } from "shared/assets/svgs";

export default function PropertyImages({ property }: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const images = property?.gallary;

  return (
    <SliderContainer>
      {thumbsSwiper && (
        <Swiper
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Thumbs]}
          className="property--main-thumb--slider">
          {images.map((image: any, index: number) => (
            <SwiperSlide key={`main-thumb-${index}`}>
              <img
                src={image?.url}
                style={{ width: "100%" }}
                className="img-responsive"
                alt="main-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {images && (
        <Swiper
          onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
          spaceBetween={8}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[ Thumbs, Navigation, Pagination]}
          navigation={{
            nextEl: ".custom--next",
            prevEl: ".custom--prev",
          }}
          className="property--thumb--slider">
          {images.map((image: any, index: number) => (
            <SwiperSlide key={image.id}>
              <img
                src={image?.url}
                className="img-responsive"
                alt="images"
                width={140}
                height={140}
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
      )}
    </SliderContainer>
  );
}

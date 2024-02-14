import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Flex } from "apps/front-office/design-system/components/Grids";
import Comment from "./Comment";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DirectionIcon } from "shared/assets/svgs";

const CommentsSlider = ({ comments }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      navigation={{
        prevEl: ".custom--prev",
        nextEl: ".custom--next",
      }}
      // autoplay={true}
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
      }}
    >
      {comments.map((comment, i) => (
        <SwiperSlide key={`comment-${i}`}>
          <Flex justify="center" fullWidth>
            <Comment comment={comment} />
          </Flex>
        </SwiperSlide>
      ))}
      <div className="custom--prev">
        <DirectionIcon type="left" />
      </div>
      <div className="custom--next">
        <DirectionIcon type="right" />
      </div>
    </Swiper>
  );
};
export default CommentsSlider;

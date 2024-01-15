import { Swiper, SwiperSlide } from "swiper/react";
import BrandsIcon from "shared/assets/svgs/BrandsIcon";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Flex } from "apps/front-office/design-system/components/Grids";
import {
  P3,
  P4,
  Small,
} from "apps/front-office/design-system/components/Typography";
import { UserWrapper } from "./style";
import { theme } from "apps/front-office/design-system";

const TestimonialsCarousel = ({ testimonials }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {testimonials.map((testimonial, i) => (
        <SwiperSlide key={`brand-${i}`}>
            <P3>{testimonial.description}</P3>
            <UserWrapper>
              <Flex gap="20px" className="description">
                <img src={testimonial.image} />
                <Flex direction="column">
                  <P4 color={theme.colors.primaryColor} weight="700">
                    {testimonial.name}
                  </P4>
                  <Small color="#666">{testimonial.title}</Small>
                </Flex>
              </Flex>
            </UserWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default TestimonialsCarousel;

import {
  Col,
  Container,
} from "apps/front-office/design-system/components/Grids";
import React from "react";
import { QuoteImageWrapper, TestimonialsCard, TestimonialsCover, TestimonialsWrapper } from "./style";
import { Grid } from "@mantine/core";
import TestimonialsCarousel from "./TestimonialsCarousel";
import UserImage from "shared/assets/images/user.jpeg";
import QuoteImage from "shared/assets/images/qouts.png";
import TestimonialsCoverImage from "shared/assets/images/testimonials-cover.jpg";

const testimonials = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
    image: UserImage,
    name: "Harry Wilson",
    title: "Property Owner",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
    image: UserImage,
    name: "Harry Wilson",
    title: "Property Owner",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
    image: UserImage,
    name: "Harry Wilson",
    title: "Property Owner",
  },
];

const Testimonials = () => {
  return (
    <Container>
      <TestimonialsCard>
        <Grid>
          <Col base={12} md={6}>
            <TestimonialsWrapper>
              <QuoteImageWrapper>
                <img src={QuoteImage} />  
              </QuoteImageWrapper> 
              <TestimonialsCarousel testimonials={testimonials} />
            </TestimonialsWrapper>
          </Col>
          <Col base={12} md={6}>
            <TestimonialsCover>
              <img src={TestimonialsCoverImage} />
            </TestimonialsCover>
          </Col>
        </Grid>
      </TestimonialsCard>
    </Container>
  );
};

export default Testimonials;

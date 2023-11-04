/* eslint-disable react/prop-types */

import SectionTitle from '../../components/common/SectionTitle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero1 from '../../assets/images/hero1.png';
import TestimonialSlide from './Testimonials/TestimonialSlice';
import SampleNextvArrow from './Testimonials/SampleNextArrow';
import SamplePrevArrow from './Testimonials/SamplePreArrow';

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextvArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'John Doe',
      authorImage: hero1,
    },
    {
      id: 2,
      rating: 5,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'Jane Doe',
      authorImage: hero1,
    },
    {
      id: 3,
      rating: 5,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'Bob Smith',
      authorImage: hero1,
    },
  ];

  return (
    <section className="py-20">
      <SectionTitle
        title1="Curated for Your Success"
        title2="Benefits that Personalize Your Trading Experience"
      />
      <div className="max-w-xl mx-auto py-10">
        <Slider {...settings}>
          {reviews.map(review => (
            <div key={review.id}>
              <TestimonialSlide review={review} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

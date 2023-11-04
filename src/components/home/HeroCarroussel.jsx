import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import hero1 from '../../assets/images/hero1.png';
import hero2 from '../../assets/images/hero2.png';
import hero3 from '../../assets/images/hero3.png';

const HeroCarroussel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slides = [
    {
      id: 1,
      image: hero2,
    },
    {
      id: 2,
      image: hero2,
    },
    {
      id: 3,
      image: hero3,
    },
  ];

  return (
    <div className="relative w-full flex-1">
      <Slider {...settings}>
        {slides.map(category => (
          <div
            key={category.id}
            className="slide_item w-full flex-1 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${category.image})` }}>
            <img
              src={category.image}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarroussel;

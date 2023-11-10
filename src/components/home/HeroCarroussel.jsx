import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import factory1 from '../../assets/ennyen_pictures/ennyen_news_letter_section.jpeg';
//import factory3 from '../../assets/ennyen_pictures/ennyen_factory.jpeg';
import factory3 from '../../assets/ennyen_pictures/ennyen_factory_2.jpeg';
import factory2 from '../../assets/ennyen_pictures/ennyen_product_3.jpeg';

const HeroCarroussel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: factory1,
    },
    {
      id: 2,
      image: factory2,
    },
    {
      id: 3,
      image: factory3,
    },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Slider {...settings}>
        {slides.map(category => (
          <div
            key={category.id}
            className="slide_item w-full h-full flex-1 bg-cover bg-top bg-no-repeat overflow-hidden"
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

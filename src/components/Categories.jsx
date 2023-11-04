import SectionTitle from './common/SectionTitle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pannels from '../assets/images/categories/pannels.png';
import accessories from '../assets/images/categories/accessories.png';
import generators from '../assets/images/categories/generators.png';
import charge_controllers from '../assets/images/categories/charge_controllers.png';
import mask from '../assets/images/categories/Mask-group.png';
import batteries from '../assets/images/categories/batteries.png';
import Container from './common/Container';

const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const categories = [
    {
      id: 1,
      image: mask,
      name: 'Solar inverters',
      link: '',
    },
    {
      id: 2,
      image: pannels,
      name: 'Solar pannels',
      link: '',
    },
    {
      id: 3,
      image: batteries,
      name: 'Batteries',
      link: '',
    },
    {
      id: 4,
      image: charge_controllers,
      name: 'Charge Controllers',
      link: '',
    },
    {
      id: 5,
      image: generators,
      name: 'Genarators',
      link: '',
    },
    {
      id: 6,
      image: accessories,
      name: 'Accesssories',
      link: '',
    },
  ];
  return (
    <section className="py-10">
      <SectionTitle
        title1="Discover, Delight, Repeat."
        title2="Browse ENNYEN's captivating categories"
      />
      <Container>
        <div className="pt-20 border-t border-green-800">
          <Slider {...settings}>
            {categories.map(category => (
              <div key={category.id} className="flex justify-center">
                <div className="flex flex-col justify-center items-center">
                  <img src={category.image} alt="image" className="h-20 " />
                  <p>{category.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Categories;

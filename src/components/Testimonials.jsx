/* eslint-disable react/prop-types */
import SectionTitle from './common/SectionTitle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero1 from '../assets/images/hero1.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '',
        position: 'absolute',
        top: '95%',
        left: '60%',

        color: 'black',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '',
        position: 'absolute',
        top: '95%',
        left: '55%',
      }}
      onClick={onClick}
    />
  );
}

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'John Doe',
    },
    {
      id: 2,
      rating: 5,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'Jane Doe',
    },
    {
      id: 3,
      rating: 5,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'Bob Smith',
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
            <div key={review.id} className="">
              <div className="px-5 grid grid-cols-3 md:grid-cols-2 gap-5 items-center">
                <div className="bg-blue-100 p-3 rounded-md">
                  <img src={hero1} alt="" className=" w-full object-cover" />
                  <h2>{review.author}</h2>
                  <p className="text-[.6rem] md:text-[.9rem]">
                    CEO of flash.co
                  </p>
                </div>
                <div className="text-[.6rem] md:text-[.9rem] col-span-2 md:col-span-1">
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh{' '}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

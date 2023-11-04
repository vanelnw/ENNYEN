/* eslint-disable react/prop-types */
const TestimonialSlide = ({ review }) => (
  <div className="px-5 grid grid-cols-3 md:grid-cols-2 gap-5 items-center">
    <div className="bg-blue-100 p-3 rounded-md">
      <img
        src={review.authorImage}
        alt={review.author}
        className="w-full object-cover"
      />
      <h2>{review.author}</h2>
      <p className="text-[.6rem] md:text-[.9rem]">CEO of flash.co</p>
    </div>
    <div className="text-[.6rem] md:text-[.9rem] col-span-2 md:col-span-1">
      <p>{review.content}</p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh{' '}
      </p>
    </div>
  </div>
);

export default TestimonialSlide;

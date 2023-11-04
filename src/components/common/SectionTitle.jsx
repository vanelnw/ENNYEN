/* eslint-disable react/prop-types */
import Container from './Container';

const SectionTitle = ({ title1, title2 }) => {
  return (
    <Container>
      <div className="py-3 text-green-900">
        <span className="text-[1rem] ">{title1}</span>
        <h1 className="font-heading-1 max-w-[40rem] text-[2rem]  lg:text-[3rem] tracking-[0] leading-[normal]">
          {title2}
        </h1>
      </div>
    </Container>
  );
};

export default SectionTitle;

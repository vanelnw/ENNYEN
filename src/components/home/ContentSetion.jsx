/* eslint-disable react/prop-types */
import Container from '../../components/common/Container';
import content1 from '../../assets/images/content1.png';
import content2 from '../../assets/images/content2.png';

const ContentSection = ({ title, description, imageSrc, imagePosition }) => {
  const isLeftImage = imagePosition === 'left';
  return (
    <div
      className={`relative flex flex-wrap items-center bg-gray-100 ${
        isLeftImage ? 'flex-row-reverse' : 'flex-row'
      }`}>
      <div className="w-full lg:w-1/2 p-8 sm:p-16 lg:p-12">
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>

        <p className="mt-4 text-gray-600">{description}</p>

        <a
          href="#"
          className="mt-8 inline-block rounded border border-blue bg-blue px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-blue focus:outline-none focus:ring active:text-indigo-500">
          Try Now
        </a>
      </div>
      <div className="w-full lg:w-1/2 h-64 sm:h-80">
        <img
          alt="House"
          src={imageSrc}
          className="inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

const ContentSectionWrapper = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="pb-10">
          <ContentSection
            title="Reduce electricity bills with genuine solar solutions"
            description="Get all in one place for your solar/green energy installation, products, and services by connecting with the right providers locally and internationally from one dashboard of proposals to make a choice from."
            imageSrc={content1}
            imagePosition="right"
          />
        </div>
      </Container>
      <Container>
        <div className="py-5">
          <ContentSection
            title="Meet your customers and partners right here."
            description="Marketplace where you can meet the buyers/clients of your solar energy products and services. Advertise factories & manufacturing companies and close deals Now."
            imageSrc={content2}
            imagePosition="left"
          />
        </div>
      </Container>
    </section>
  );
};

export default ContentSectionWrapper;

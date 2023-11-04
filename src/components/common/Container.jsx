/* eslint-disable react/prop-types */

const Container = ({ children }) => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
      {children}
    </div>
  );
};

export default Container;

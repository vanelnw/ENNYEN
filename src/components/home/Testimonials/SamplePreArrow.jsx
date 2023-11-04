/* eslint-disable react/prop-types */
const SamplePrevArrow = props => {
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
};

export default SamplePrevArrow;

/* eslint-disable react/prop-types */
const SampleNextvArrow = props => {
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
};

export default SampleNextvArrow;

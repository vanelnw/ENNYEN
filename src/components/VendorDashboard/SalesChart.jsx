import { Line } from 'react-chartjs-2';

const SalesChart = () => {
  const chartData = {
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Previous Week',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [1250, 1300, 1550, 1200, 1856, 2102, 1508],
      },
      {
        label: 'Current Week',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [1200, 1900, 2150, 1500, 2356, 2004, 2508],
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SalesChart;

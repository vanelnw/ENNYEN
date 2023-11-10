import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

const SalesChart = () => {
  const chartData = {
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Previous Week',
        backgroundColor: '#73B95B',
        borderColor: '#73B95B',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [1250, 1300, 1550, 1200, 1856, 2102, 1508],
      },
      {
        label: 'This Week',
        backgroundColor: '#2660A3',
        borderColor: '#2660A3',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: '#2660A3',
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
    <div className="w-full p-2">
      <div style={{ width: '100%' }}>
        <h1 className="font-bold">Sales Statistics</h1>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SalesChart;

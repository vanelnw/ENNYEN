import { Doughnut } from 'react-chartjs-2';

const OrdersChart = () => {
  const chartData = {
    labels: ['Completed', 'Pending', 'Cancelled', 'Refunded'],
    datasets: [
      {
        data: [300, 100, 60, 40],
        backgroundColor: ['#528341', '#F7EB60', '#2660A3', '#BCCEE2'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Disable aspect ratio to make it a perfect circle
    plugins: {
      title: {
        display: true,
        text: 'Order Statistics',
      },
      legend: {
        display: false, // Hide default legend
      },
    },
  };

  const legendItems = chartData.labels.map((label, index) => (
    <div key={index} className="legend-item flex gap-2">
      <div
        className="legend-color h-6 w-6 rounded-full "
        style={{
          backgroundColor: chartData.datasets[0].backgroundColor[index],
        }}
      />
      <div className="legend-label">{label}</div>
      <span>( {chartData.datasets[0].data[index]} )</span>
    </div>
  ));
  return (
    <div className="order-chart-container p-5">
      <div className="chart">
        <Doughnut data={chartData} options={options} />
      </div>
      <div className="legend flex flex-col gap-2">
        <h2 className="underline font-bold">Key</h2>
        {legendItems}
      </div>
    </div>
  );
};

export default OrdersChart;

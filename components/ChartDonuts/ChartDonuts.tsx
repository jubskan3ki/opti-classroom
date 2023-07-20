import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import styles from './ChartDonuts.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
};
interface ChartProps {
    data: number[];
    labels: string[];
    title: string;
    color: string[];
    borderColor: string;
}

const ChartDonuts: React.FC<ChartProps> = ({ data, labels, borderColor, color }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: color,
                borderColor: borderColor,
                borderWidth: 2
            }
        ]
    };

    return <Doughnut className={styles.Donut} data={chartData} />;
};

export default ChartDonuts;
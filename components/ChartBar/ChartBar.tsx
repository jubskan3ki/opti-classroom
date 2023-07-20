import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './ChartBar.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
    data: number[];
    labels: string[];
    title: string;
    color: string;
}

const ChartBar: React.FC<ChartProps> = ({ data, labels, title, color }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: title,
                data: data,
                backgroundColor: color,
                borderColor: color,
                borderWidth: 1
            }
        ]
    };

    return <Bar className={styles.Bar} data={chartData} />;
};

export default ChartBar;
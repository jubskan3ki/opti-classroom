import React from 'react';
import { Bar } from 'react-chartjs-2';

interface ChartProps {
    data: number[];
    labels: string[];
    title: string;
    color: string;
}

const ChartComponent: React.FC<ChartProps> = ({ data, labels, title, color }) => {
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

    return <Bar data={chartData} />;
}

export default ChartComponent;
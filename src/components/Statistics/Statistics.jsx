/* eslint-disable */
import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const data = [
    { name: 'Assignment 1', value: 57 },
    { name: 'Assignment 2', value: 60 },
    { name: 'Assignment 3', value: 60 },
    { name: 'Assignment 4', value: 60 },
    { name: 'Assignment 5', value: 60 },
    { name: 'Assignment 5', value: 58 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const Statistics = () => {
    return (
        <PieChart width={500} height={300}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={({ name, value }) => `${name} (${value})`}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default Statistics;

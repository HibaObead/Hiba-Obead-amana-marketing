"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
} from "recharts";

interface LineChartProps {
    title: string;
    data: { [key: string]: string | number }[];
    dataKeys: string[];
    className?: string;
    height?: number;
}

export function LineChartComponent({
    title,
    data,
    dataKeys,
    className = "",
    height = 300,
}: LineChartProps) {
    if (!data || data.length === 0) {
        return (
            <div
                className={`bg-gray-800 rounded-lg p-6 border border-gray-700 ${className}`}
            >
                <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
                <div className="flex items-center justify-center h-48 text-gray-400">
                    No data available
                </div>
            </div>
        );
    }

    const colors = [
        "#3B82F6",
        "#10B981",
        "#F59E0B",
        "#EF4444",
        "#8B5CF6",
        "#06B6D4",
        "#84CC16",
        "#F97316",
        "#EC4899",
        "#6366F1",
    ];

    return (
        <div
            className={`bg-gray-800 rounded-lg p-6 border border-gray-700 ${className}`}
        >
            <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
            <div style={{ height: `${height}px` }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="week" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1F2937",
                                border: "none",
                                color: "#F3F4F6",
                            }}
                        />
                        <Legend />
                        {dataKeys.map((key, index) => (
                            <Line
                                key={key}
                                type="monotone"
                                dataKey={key}
                                stroke={colors[index % colors.length]}
                                strokeWidth={2}
                                dot={{ r: 3 }}
                                activeDot={{ r: 5 }}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

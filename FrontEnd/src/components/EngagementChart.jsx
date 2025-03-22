import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./EngagementChart.css"; // Separate CSS file



const EngagementChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3>Engagement Rate Over Time</h3>
      <h1>7.2%</h1>
      <p>Last 12 Months <span className="positive">+1.5%</span></p>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#888" />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="engagement" stroke="#ddd" strokeWidth={3} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EngagementChart;

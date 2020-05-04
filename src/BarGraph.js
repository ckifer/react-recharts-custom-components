import React from "react";
import {
  Bar,
  BarChart,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import { format } from "d3-format";

const BarGraph = () => {
  const data = [
    {
      name: "GREATER CHINA",
      DP_QTY: 200000000,
    },
    {
      name: "EMEA",
      DP_QTY: 300000000,
    },
    {
      name: "NORTH AMERICA",
      DP_QTY: 500000000,
    },
    {
      name: "APLA",
      DP_QTY: 400000000,
    },
  ];

  const colors = ["red", "navy", "lightblue", "darkblue"];
  return (
    <BarChart
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="DP_QTY" tickFormatter={format("~s")} />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      {/* <Bar dataKey="DP_QTY" fill="#82ca9d" /> */}
      <Bar dataKey="DP_QTY" name="Demand Plan Qty By Geo" fill="red">
        {data.map((_, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index]}
            strokeWidth={index === 2 ? 4 : 1}
          />
        ))}
      </Bar>
    </BarChart>
  );
};

export default BarGraph;

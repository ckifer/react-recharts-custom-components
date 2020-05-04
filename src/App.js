import React from "react";
// import { ResponsiveContainer } from "recharts";
import {
  Bar,
  BarChart,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { format } from "d3-format";
import BarGraph from "./BarGraph";
import CustomTooltip from "./CustomTooltip";

const App = () => {
  const data = [
    {
      name: "GREATER CHINA",
      DP_QTY: 200000000,
      test: "test",
    },
    {
      name: "EMEA",
      DP_QTY: 300000000,
      test: "test1",
    },
    {
      name: "NORTH AMERICA",
      DP_QTY: 500000000,
      test: "test2",
    },
    {
      name: "APLA",
      DP_QTY: 400000000,
      test: "test3",
    },
  ];

  const colors = ["red", "navy", "lightblue", "darkblue"];
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      // minHeight={200}
      aspect={2.5}
    >
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
        <Tooltip content={<CustomTooltip />} />
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
    </ResponsiveContainer>
  );
};

export default App;

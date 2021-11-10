import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import { useSelector } from "react-redux";

const data = [
  {
    createdAt: "2021-11",
    usuarios: 5,
  },
  {
    createdAt: "2021-12",
    usuarios: 25,
  },
  {
    createdAt: "2021-1",
    usuarios: 50,
  },
  {
    createdAt: "2021-2",
    usuarios: 8,
  },
];

const ChartUsersPerMonth = () => {
  // const { usuarios } = useSelector((state) => state);

  // const getData = () => {
  //   let stack = [];
  //   let seen = {};
  //   for (const usuario of usuarios) {
  //     if (seen[usuario.createdAt]) {
  //       const found = stack.find(
  //         (entry) => entry.createdAt === usuario.createdAt
  //       );
  //       found.usuarios++;
  //     } else {
  //       seen[usuario.createdAt] = true;
  //       stack.push({ createdAt: usuario.createdAt, usuarios: 1 });
  //     }
  //   }
  //   return stack;
  // };

  // const data = getData();

  return (
    <div style={{ width: "1000px", height: "300px", border: "1px solid" }}>
      <h3 style={{ textAlign: "center" }}>Users Growth</h3>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82CA9D" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#85CA9D" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" allowDuplicatedCategory={false} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            stroke="#82ca9d"
            fill="url(#color)"
            fillOpacity={1}
            dataKey="usuarios"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartUsersPerMonth;

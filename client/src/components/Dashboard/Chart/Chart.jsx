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
import { useSelector } from "react-redux";

const data = [
  {
    createdAt: "2021-11",
    usuarios: 4,
  },
  {
    createdAt: "2021-12",
    usuarios: 8,
  },
  {
    createdAt: "2022-1",
    usuarios: 14,
  },
  {
    createdAt: "2022-2",
    usuarios: 17,
  },
  {
    createdAt: "2022-3",
    usuarios: 25,
  },
  {
    createdAt: "2022-4",
    usuarios: 33,
  },
  {
    createdAt: "2022-5",
    usuarios: 82,
  },
];

const Chart = () => {
  const { usuarios } = useSelector((state) => state);

  // const data = usuarios.map((usuario) => {
  //   return {
  //     createdAt: usuario.createdAt,
  //     usuarios: usuarios.length,
  //   };
  // });

  // console.log(data);

  return (
    <div style={{ width: "1000px", height: "250px" }}>
      <ResponsiveContainer width="100%" height="100%">
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" allowDuplicatedCategory={false} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            stroke="#82ca9d"
            fill="#82ca9d"
            dataKey="usuarios"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

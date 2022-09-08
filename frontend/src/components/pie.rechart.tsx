import React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

type pieData = {
  name: string
  value: number
}[]

const PieRechartComponent = ({ pieData }: { pieData: pieData }) => {

  const COLORS = ['#0088FE', '#999']

  return (
    <>
      <h2>CPU Usage - Recharts</h2>
      <ResponsiveContainer width={"100%"} height={300} min-width={300}>
        <PieChart width={400} height={400}>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={COLORS[1]}
          >
            {pieData[0].value}
          </text>
          <Pie
            data={pieData}
            dataKey="value"
            innerRadius="80%"
            outerRadius="100%"
            fill="#82ca9d"
            startAngle={-60}
            endAngle={240}
            paddingAngle={0}
            blendStroke
          >
            {
              pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  )

}

export default PieRechartComponent 
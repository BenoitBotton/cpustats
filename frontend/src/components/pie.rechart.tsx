import React from "react"
import { PieChart, Pie, Cell } from 'recharts'

class PieRechartComponent extends React.Component {

  COLORS = ['#0088FE', '#999']


  data = [
    { name: "L2", value: 25 },
    { name: "L1", value: 75 }
  ]

  render() {
    return (
      <PieChart width={400} height={400}>
        <text
          x={25}
          y={25}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          25
        </text>
        <Pie
          data={this.data}
          dataKey="value"
          innerRadius="80%"
          outerRadius="100%"
          fill="#82ca9d"
          startAngle={-80}
          endAngle={260}
          paddingAngle={0}
          blendStroke
        >
          {
            this.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={this.COLORS[index]} />
            ))
          }
        </Pie>
      </PieChart>
    )
  }
}

export default PieRechartComponent
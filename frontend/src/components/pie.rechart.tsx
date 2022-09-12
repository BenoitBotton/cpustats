import React, { Component } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

type PieData = {
  name: string
  value: number
}[]

class PieRechartComponent extends React.Component<PieData> {
  COLORS = ['#F26D22', 'transparent']
  pieData = [...this.props]

  render(){
    return (
      <>
        <h2>CPU Usage - Recharts</h2>
        <ResponsiveContainer width={"100%"} height={300} min-width={300}>
          <PieChart width={400} height={400}>
            {/* <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: 30, fill: '#999', fontFamily: 'candara' }}
            >
              {usage}
            </text> */}
            <Pie
              data={this.pieData}
              dataKey="value"
              innerRadius="80%"
              outerRadius="100%"
              fill="#82ca9d"
              startAngle={-60}
              endAngle={240}
              paddingAngle={0}
              blendStroke
              cornerRadius={10}
            >
              {
                this.pieData.map((_entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={this.COLORS[index]} />
                ))
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </>
    )
  }
}

export default PieRechartComponent 
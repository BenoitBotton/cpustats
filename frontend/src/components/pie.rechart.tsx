import React, { Component } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export type PieData = {
  name: string
  value: number
}

interface PieDataProps {
  pieData: PieData[]
}

interface States { }

export class PieRechartComponent extends React.Component<PieDataProps, States> {
  COLORS = ['#F26D22', 'transparent']

  constructor(props: PieDataProps) {
    super(props)
  }

  render() {
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
              data={this.props.pieData}
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
                this.props.pieData.map((_entry: any, index: number) => (
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
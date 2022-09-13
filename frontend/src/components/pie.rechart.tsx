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
  COLORS = ['transparent', '#F26D22']

  constructor(props: PieDataProps) {
    super(props)
  }

  render() {

    let data = this.props.pieData
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
              style={{ fontSize: 30, fill: '#999', fontFamily: 'candara' }}
            >
              {
                data.filter(data => data.name == "L2").map(filterdData => filterdData.value)
              }%
            </text>
            <Pie
              data={data}
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
                data.map((_entry: any, index: number) => (
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
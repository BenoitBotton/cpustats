import './App.css'
import { SetStateAction, useEffect, useState } from 'react'
import React from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'
import PieRechartComponent from './components/pie.rechart'

const percent = 25

function App() {
    const [usage, setUsage] = useState(0)

    useEffect(() => {
        // @ts-ignore
        window.runtime.EventsOn("cpu_usage", (cpu_usage: { avg: SetStateAction<number> }) => {
            setUsage(cpu_usage.avg)
        }),
            []
    })

    return (
        <div id="App">
            <div>CPU Usage: {usage}</div>
            <PieRechartComponent/>
        </div>
    )
}

export default App

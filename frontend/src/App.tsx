import './App.css'
import { SetStateAction, useEffect, useState } from 'react'
import React from 'react'
import PieRechartComponent from './components/pie.rechart'

function App() {
    const [usage, setUsage] = useState(0)

    useEffect(() => {
        // @ts-ignore
        window.runtime.EventsOn("cpu_usage", (cpu_usage: { avg: SetStateAction<number> }) => {
            setUsage(cpu_usage.avg)
        }),
            []
    })

    const pieData = [
        { name: "L2", value: usage },
        { name: "L1", value: 100 - usage }
    ]

    return (
        <div id="App">
            <PieRechartComponent pieData={pieData} />
        </div>
    )
}

export default App

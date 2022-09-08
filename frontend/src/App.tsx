import './App.css';
import { SetStateAction, useEffect, useState } from 'react';
import React from 'react';

function App() {
const [usage, setUsage] = useState(0)
    
useEffect(()=>{
    // @ts-ignore
    window.runtime.EventsOn("cpu_usage", (cpu_usage: { avg: SetStateAction<number>; }) => {
        setUsage(cpu_usage.avg);
    }),
    []})

    return (
        <div id="App">
            <div>CPU Usage: {usage}</div>
        </div>
    )
}

export default App

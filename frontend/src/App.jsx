import logo from './assets/images/logo-universal.png';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
const [usage, setUsage] = useState('nil')
    
useEffect(()=>{
    window.runtime.EventsOn("cpu_usage", cpu_usage => {
        setUsage(cpu_usage.avg);
    }),
    []})

    return (
        <div id="App">
            <img src={logo} id="logo" alt="logo" />
            <div>CPU Usage: {usage}</div>
        </div>
    )
}

export default App

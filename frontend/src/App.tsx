import './App.css'
import { Component } from 'react'
import React from 'react'
import PieRechartComponent from './components/pie.rechart'
import PieVictoryComponent from './components/pie.victory'

type PieData = {
    name: string
    value: number
  }[]
  
class App extends Component {
    state =  { usage: 0}
       

    render() {
        //  @ts-ignore
    window.runtime.EventsOn("cpu_usage", (cpu_usage: { avg:number }) => {
        this.setState({usage: cpu_usage.avg})});

      const {usage} = this.state
      const pieData = [
            { name: "L2", value: usage },
            { name: "L1", value: 100 - usage }
        ]
        
        return (
            <div id="App">
                <PieRechartComponent pieData={pieData} />
                <PieVictoryComponent pieData={pieData} />
            </div>
        )
    }
}

export default App

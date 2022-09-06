import logo from './assets/images/logo-universal.png';
import './App.css';


function App() {
    let resultText = 0;

    window.runtime.Eventson("cpu_usage", cpu_usage => {
        resultText = cpu_usage.avg;
    })

    return (
        <div id="App">
            <img src={logo} id="logo" alt="logo" />
            <div>CPU Usage: {resultText}</div>
        </div>
    )
}

export default App

//import {DigitalClock} from "./DigitalClock/DigitalClock";
import './App.css';
import DigitalClock from './components/DigitalClock/DigitalClock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>My Pretty Watch</h3>
      <DigitalClock></DigitalClock>
      </header>
    
    </div>
  );
}

export default App;

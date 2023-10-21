import './App.css';
import { Routes, Route } from "react-router-dom";
import HOME from './components/Home';
import NAVBAR from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="App-content">
      <NAVBAR/>
      <HOME/>
      </div>
    </div>
  );
}

export default App;

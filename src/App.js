import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useRef } from 'react';
import HOME from './components/Home';
import NAVBAR from './components/Navbar';
import { MENU } from './components/Menu';

function App() {

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const handleScroll = (section) => {
    const ref = section === 'section1' ? section1Ref : section2Ref;
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="App-content">
      <NAVBAR onClick={handleScroll}/>
      <HOME section1Ref={section1Ref} section2Ref={section2Ref}/>
      <MENU/>
      </div>
    </div>
  );
}

export default App;

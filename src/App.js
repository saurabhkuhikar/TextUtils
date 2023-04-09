import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar.js';
import TextConv from './Components/TextConv.js';
import React,{ useState }  from 'react';
import { BrowserRouter as Router, Routes, Route, link } from 'react-router-dom';

function App() {
  const webTitle = "TextUtils";

  const [mode,setMode] = useState('light');
  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#151d6c";
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Router>
      <Navbar title={webTitle} aboutTextUtils = "About" mode = {mode} toggleMode = {toggleMode} />
      <div className="container">
        <Routes>
        <Route exctly path="/about" element={  <About title={webTitle}  mode = {mode} />} />
        <Route exctly path="/" element={ <TextConv heading="Enter the text and analyze below" mode = {mode} />} />
        </Routes>
      </div>
    </Router>
    </>

  );
}

export default App;

import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { 
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Code from './pages/Code';
import Resume from './pages/Resume';
import Photos from './pages/Photos';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Code />} />
        <Route path="/photography" element={<Photos />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
      
  );
}

export default App;

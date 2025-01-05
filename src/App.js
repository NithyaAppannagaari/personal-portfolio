import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Code from './pages/Code';
import Resume from './pages/Resume';
import Photos from './pages/Photos';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Code />} />
        <Route exact path="/photography" element={<Photos />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;

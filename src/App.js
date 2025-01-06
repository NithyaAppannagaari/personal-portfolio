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
        <Route exact path="/app" element={<Home />} />
        <Route exact path="/app/projects" element={<Code />} />
        <Route exact path="/app/photography" element={<Photos />} />
        <Route exact path="/app/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;

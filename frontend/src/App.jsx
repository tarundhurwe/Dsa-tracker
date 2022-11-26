import './App.css';
import HomePage from './components/HomePage'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Profile } from './components/Profile';

function App() {
  const websiteName = "Code Badger"
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage name={websiteName} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Footer} from './components/statics/footer/Footer';
import {Home} from './pages/home/Home';
import './App.css';
import { Title } from './components/title/title';
import {Login} from './pages/login/Login';
import { Navbar } from './components/statics/navbar/Navbar';
import { Posting } from './pages/posting/Posting';
import { RegisterUser } from './pages/registerUser/RegisterUser';

function App() {
  const nome = '𝒢𝓇𝑒𝑒𝓃 𝐻𝑒𝒶𝓇𝓉 💚'

  return (
    <Router>
      <Navbar />
      
      <Routes>
        
        <Route path="/login" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/posting" element={<Posting />} />

        <Route path="/registeruser" element={<RegisterUser />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

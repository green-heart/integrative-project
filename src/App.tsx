import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navbar} from './components/statics/navbar/Navbar';
import {Footer} from './components/statics/footer/Footer';
import {Home} from './pages/home/Home';
import './App.css';
import {Login} from './pages/login/Login';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/login" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
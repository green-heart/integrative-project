import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navbar} from './components/statics/navbar/Navbar';
import {Footer} from './components/statics/footer/Footer';
import {Home} from './pages/home/Home';
import './App.css';
import { Title } from './components/title/title';
import { Subtitles } from './components/subtitles/subtitles'
import {Login} from './pages/login/Login';

function App() {
  const nome = '𝒢𝓇𝑒𝑒𝓃 𝐻𝑒𝒶𝓇𝓉 💚'

  return (
    <Router>
      <Navbar />
      <Title nome ={nome} />
      <Subtitles/>
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

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import { Title } from './components/title/title';
import { Footer } from './components/footer/footer';
import { Subtitles } from './components/subtitles/subtitles'
function App() {
  const nome = '𝒢𝓇𝑒𝑒𝓃 𝐻𝑒𝒶𝓇𝓉 💚'

  return (
    <>
    <Navbar />
    <Title nome ={nome} />
    <Subtitles/>
    <Footer />
    
    </>
  );
}

export default App;
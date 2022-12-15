import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navbar} from './components/statics/navbar/Navbar';
import { RegisterUser } from './pages/register/Register';
import { Footer } from './components/statics/footer/Footer';
import { Login } from './pages/login/Login';
import ListPosting from './components/post/listPosting/ListPosting';
import NewPosting from './components/post/newPosting/NewPosting';
import DeletePosting from './components/post/deletePosting/DeletePosting'
import ListTheme from './components/theme/listTheme/ListTheme';
import { Home } from './pages/home/Home';
import NewTheme from './components/theme/newTheme/NewTheme';
import DeleteTheme from './components/theme/deleteTheme/DeleteTheme';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Login  />} />

        <Route path="/login" element={<Login  />} />

        <Route path="/home" element={<Home/>} />

        <Route path="/registeruser" element={<RegisterUser />} />

        <Route path="/newPosting" element ={<NewPosting/>} />

        <Route path="/newPosting/:id" element ={<NewPosting/>} />

        <Route path="/newTheme/:id" element ={<NewTheme/>} />

        <Route path="/deletePosting/:id" element ={<DeletePosting/>} />

        <Route path="/deleteTheme/:id" element ={<DeleteTheme/>} />

        <Route path="/newTheme" element ={<NewTheme/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

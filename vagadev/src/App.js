import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalStorage } from './storage/UserContext';
import Menu from './components/sections/Menu';
import Footer from './components/sections/Footer';
import Contato from './pages/Contato';

const App = () => {
  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
};

export default App;

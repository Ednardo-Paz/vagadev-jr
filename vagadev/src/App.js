import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalStorage, UserContext } from './storage/UserContext';

const App = () => {
  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardDetailsPage from './pages/CardDetailsPage';

const Routers = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/card/:id" element={<CardDetailsPage/>} />
    </Routes>
  </Router>
);

export default Routers;
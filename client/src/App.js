import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PresaleDetail from './pages/PresaleDetail';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-900 via-crypto-dark to-gray-800">
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/presale/:slug" element={<PresaleDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
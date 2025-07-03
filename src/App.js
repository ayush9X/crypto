import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeLayout from './components/HomeLayout';

import TermsOfService from './policies/TermsOfService';
import ReturnRefundPolicy from './policies/ReturnRefundPolicy';
import PrivacyPolicy from './policies/PrivacyPolicy';

const App = () => (
  <Router>
    <Navbar />
    <div style={{ minHeight: '80vh' }}>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/refund" element={<ReturnRefundPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;

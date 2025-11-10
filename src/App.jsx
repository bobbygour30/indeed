import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IndeedFooter from './components/Footer';

// Import all pages
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import PasswordProtectedPage from './pages/PasswordProtectedPage';
import PaymentDetails from './pages/PaymentDetails';
import RecruiterConnection from './pages/RecruiterConnection';
import TopManagement from './pages/TopManagement';
import JobCode from './pages/JobCode';
import JobsPage from './pages/JobsPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/password-protected" element={<PasswordProtectedPage />} />
            <Route path="/payment-details" element={<PaymentDetails />} />
            <Route path="/recruiter-connection" element={<RecruiterConnection />} />
            <Route path="/top-management" element={<TopManagement />} />
            <Route path="/job-code" element={<JobCode />} />
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>
        </main>
        <IndeedFooter />
      </div>
    </Router>
  );
};

export default App;
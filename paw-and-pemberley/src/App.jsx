import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; // 👈 naya import

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Team from './pages/Team';
import Journal from './pages/Journal';
import JournalArticle from './pages/JournalArticle';
import TestimonialsPage from './pages/TestimonialsPage';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans selection:bg-gold selection:text-charcoal antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalArticle />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton /> {/* 👈 yeh add kiya */}
      </div>
    </Router>
  );
}
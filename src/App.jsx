import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { lazy, Suspense } from 'react';
import Nav from './components/Nav';
import CookieNotice from './components/CookieNotice';
import Home from './pages/Home';
import Careers from './pages/Careers';
import ScrollToTop from './components/ScrollToTop';

const Menu = lazy(() => import('./pages/Menu'));

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Nav />
        <CookieNotice />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/menu" element={<Suspense fallback={null}><Menu /></Suspense>} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

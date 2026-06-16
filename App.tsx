import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Quote from './components/Quote';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LoftConversionsPage from './pages/LoftConversionsPage';
import KitchenRenovationsPage from './pages/KitchenRenovationsPage';
import BathroomFittingPage from './pages/BathroomFittingPage';
import MaintenancePlumbingPage from './pages/MaintenancePlumbingPage';
import PaintingDecoratingPage from './pages/PaintingDecoratingPage';
import GetAFreeQuotePage from './pages/GetAFreeQuotePage';

function HomePage() {
  return (
    <div className="bg-cream-100 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/loft-conversions" element={<LoftConversionsPage />} />
        <Route path="/services/kitchen-renovations" element={<KitchenRenovationsPage />} />
        <Route path="/services/bathroom-fitting" element={<BathroomFittingPage />} />
        <Route path="/services/maintenance-plumbing" element={<MaintenancePlumbingPage />} />
        <Route path="/services/painting-decorating" element={<PaintingDecoratingPage />} />
        <Route path="/getaquote" element={<GetAFreeQuotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

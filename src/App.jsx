import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Pages
import Entry from './pages/Entry'
import Hub from './pages/Hub'
import Why from './pages/Why'
import Retail from './pages/Retail'
import Luxury from './pages/Luxury'
import Dining from './pages/Dining'
import Attractions from './pages/Attractions'
import Events from './pages/Events'

// Components
import Navigation from './components/molecules/Navigation'
import CTABar from './components/atoms/CTABar'
import EnquiryModal from './components/atoms/EnquiryModal'

export default function App() {
  const location = useLocation()
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Entry />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="/why" element={<Why />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/luxury" element={<Luxury />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </AnimatePresence>
      <EnquiryModal />
      <CTABar />
    </div>
  )
}
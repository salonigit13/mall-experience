import { motion } from 'framer-motion'

// Pages
import ScrollExperience from './pages/ScrollExperience'

// Components
import Navigation from './components/molecules/Navigation'
import CTABar from './components/atoms/CTABar'
import EnquiryModal from './components/atoms/EnquiryModal'

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollExperience />
      <EnquiryModal />
      <CTABar />
    </div>
  )
}
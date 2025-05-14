import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  const location = useLocation()
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="container py-8 md:py-12"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
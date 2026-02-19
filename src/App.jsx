import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'           // ← your existing home hero

// npm run dev -- --host

import CyberSecurity from './components/CyberSecurity'   // ← new component
import WebDev from './components/WebDev'
import ForexAuto from './components/ForexAuto'
import Experiances from './components/Experiances'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/web-development" element={<WebDev />} />
        <Route path="/forex-automation" element={<ForexAuto />} />
        <Route path="/experiences" element={<Experiances />} />

      </Routes>
      
    </div>
  )
}
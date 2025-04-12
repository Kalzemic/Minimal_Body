
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'

import ContactPage from './components/ContactPage'
import Subscriptions from './components/Subscriptions'

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Subscriptions" element={<Subscriptions />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ContactPage from './components/ContactPage'
import Subscriptions from './components/Subscriptions'

function App() {

  const whatsappLink = "https://wa.me/972525772886";
  const InstaLink = "https://www.instagram.com/minimalbodyil/";

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
      <div className="social-media">
        <button className="Whatsapp-button"
          onClick={() => window.open(whatsappLink, "_blank")}>

          <FaWhatsapp className="whatsapp-icon" />
        </button>
        <button className="Instagram-button"
          onClick={() => window.open(InstaLink, "_blank")}>

          <FaInstagram className="Instagram-icon" />
        </button>
      </div>
    </BrowserRouter>
  )
}

export default App

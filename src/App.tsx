
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import QAPage from './components/QAPage'
import MethodPage from './components/MethodPage'

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/QApage" element={<QAPage />} />
          <Route path="/Method" element={<MethodPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

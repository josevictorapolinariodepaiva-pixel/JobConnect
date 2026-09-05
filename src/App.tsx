import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Vagas from './pages/Vagas'
import Empresas from './pages/Empresas'
import Sobre from './pages/Sobre'
import JobDetails from './pages/JobDetails'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/vagas/:id" element={<JobDetails />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  )
}

export default App
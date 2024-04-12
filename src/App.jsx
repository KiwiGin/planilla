import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from './pages/Login'
import { Inicio } from './pages/Inicio'
import { Trabajadores } from './pages/Trabajadores'
import { Planillas } from './pages/Planillas'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/trabajadores" element={<Trabajadores />} />
          <Route path="/planillas" element={<Planillas/>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

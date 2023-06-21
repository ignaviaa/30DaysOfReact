import Navbar from './components/navbar'
import Footer from './components/Footer'
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"

import './App.css'

function App() {

  return (
    <>
      <div className='App'>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
   </Router>


        </div>
    </>
  )
}

export default App

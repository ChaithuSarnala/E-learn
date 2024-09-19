import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'
import Courses from './Components/Pages/Courses/Courses'
import Pricing from './Components/Pages/Pricing/Pricing'
import Contact from './Components/Pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
   

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact" element={<Contact/>}/>        
      </Routes>
      <Footer/>
    </Router>

    </>
  )
}

export default App

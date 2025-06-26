import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Abstract from './Sections/Abstract'
import Contact from './Sections/Contact'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Abstract/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
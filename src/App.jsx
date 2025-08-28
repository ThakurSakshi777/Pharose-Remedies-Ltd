import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home'
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import About from './pages/About/About';
import Facilities from './pages/Facilities/Facilities';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <>
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/facilities' element ={<Facilities/>}/>
    <Route path='/Gallery' element = {<Gallery/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App

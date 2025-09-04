import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import './index.css';
import Signup from './components/Signup';
import Contact from './components/contact/Contact';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/course' element= {<Courses />}/>
        <Route path='/signup' element= {<Signup />}/>
        <Route path='/contact' element= {<Contact />}/>
      </Routes>
    </>
  )
}

export default App
